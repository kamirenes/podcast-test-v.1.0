import axios from "axios";
import { TChapter, TPodCastSummary, TPodcast, TGetPodcast } from './types';
import Parser from "rss-parser";
import { milisecondsToMinutesAndSeconds } from "../utils/functions";

export default {
  podcasterAPI: {
    getAll: () =>
    axios.get(
      `https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json`
    ).then((res:any) => {
      let podcasts:TPodCastSummary[] = [];
      res.data.feed.entry.forEach((p:any) => {
        let podcast = {
          id: p.id.attributes["im:id"],
          img: p["im:image"][2].label,
          name: p["im:name"].label,
          author: p["im:artist"].label,
          summary: p.summary ? p.summary.label : "No description"
        };
        podcasts.push(podcast);
      });
      return podcasts;
    })
    .catch(
      (error: string) => console.log(`Error at fetching podcasts: ${error}`)
    ),

    getPodcast: (podcastId: string) =>
      axios
        .get(`https://itunes.apple.com/lookup?id=${podcastId}&media=podcast
        &entity=podcastEpisode&limit=20`)
        .then(res => {
          const p: TGetPodcast  = res.data.results[0];
          let podcast: TPodcast = {
            id: p.trackId,
            artwork: p.artworkUrl600,
            name: p.trackName,
            feedUrl: p.feedUrl,
            artistName: p.artistName,
            duration: milisecondsToMinutesAndSeconds(p.trackTimeMillis),
            description: p.description,
            total: p.resultCount,
            trackId: p.trackId,
          };
          return {
            podcatsDetails: podcast || null,
            podcatsList: res.data.results
          };
        })
        .catch(
          error => console.log(`Error at fetching podcast: ${error}`)
        ),

    getChapters: async (feedUrl: TPodcast['feedUrl']) => {
      const parser = new Parser();
      let chapters: TChapter[] = [];
      const feed = await parser.parseURL(`${feedUrl}`);
      feed.items.forEach(episode => {
        chapters.push({
          id: episode.guid,
          title: episode.title,
          date: episode.pubDate,
          duration: episode.itunes.duration,
          content: episode.content,
          url: episode?.enclosure?.url
        });
      });
      return chapters;
    }
  }
      
};

