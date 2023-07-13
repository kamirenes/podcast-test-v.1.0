import podcarterAPI from '../../api/PodcastApi'

export default (id: string) => {
  const data = podcarterAPI.podcasterAPI.getPodcast(id)
  console.info(data)

  return {
    data
  }
}