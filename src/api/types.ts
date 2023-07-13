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
  artistName: string
}

export type TChapter = {
  id?: string,
  title?: string,
  date?: string,
  duration?: string,
  content?: string,
  url?: string
}