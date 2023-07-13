import podcarterAPI from '../../api/PodcastApi'

export default () => {
  const data = podcarterAPI.podcasterAPI.getAll()
  console.info(data)

  return {
    data
  }
}