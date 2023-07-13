import podcarterAPI from '../../api/PodcastApi'
import { TPodcast } from '../../api/types'

export default (podcast: TPodcast) => {
  const data = podcarterAPI.podcasterAPI.getChapters(podcast)
  console.info(data)

  return {
    data
  }
}