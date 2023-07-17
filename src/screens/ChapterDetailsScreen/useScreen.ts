import { useLocation } from 'react-router-dom'

export default () => {
  const { state } = useLocation()

  const {episode, podcast} = state

  return {
    dataChapter: episode,
    dataPodcast: podcast
  }
}