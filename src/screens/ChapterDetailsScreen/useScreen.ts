import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

export default () => {
  const[isLoading, setIsLoading] = useState<boolean>(true)

  const { state } = useLocation()

  useEffect(() => {
    setIsLoading(true)
  }, [state])

  const {episode, podcast} = state

  useEffect(()=> {
    setIsLoading(false)
  }, [episode, podcast])

  //setIsLoading(false)
  return {
    dataChapter: episode,
    dataPodcast: podcast,
    isLoading
  }
}