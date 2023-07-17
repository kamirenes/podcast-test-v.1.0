export type TGetAllResponse = {}

export type TPodCastSummary = {
  author: string,
  id: string,
  img: string,
  name: string,
  summary: string,
}

export type TPodcast = {
  id: string,
  artwork: string,
  name: string,
  feedUrl: string,
  artistName: string,
  duration: string,
  description: string,
  total: number,
  trackId: string,
}

export type TChapter = {
  id?: string,
  title?: string,
  date?: string,
  duration?: string,
  content?: string,
  url?: string
}

export type TGetPodcast = {
  trackId: string, 
  artworkUrl600:string, 
  trackName: string, 
  feedUrl: string, 
  artistName: string,
  trackTimeMillis: number,
  description: string,
  resultCount: number,
}