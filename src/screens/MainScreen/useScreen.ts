import { useEffect, useMemo, useState } from 'react'
import podcarterAPI from '../../api/PodcastApi'
import { TPodCastSummary } from '../../api/types';

export default () => {
  const[filter, setFilter] = useState<string>('')
  const[data, setData] = useState<TPodCastSummary[]|[]>([])
  const[isLoading, setIsLoading] = useState<boolean>(true)
  const[dataToShow, setDataToShow] = useState<TPodCastSummary[]|[]>([])
  
  const getData = async() => {
    const response = await podcarterAPI.podcasterAPI.getAll() || []
    await setIsLoading(true)
    await setData(response)
    setIsLoading(false)
  }

 useMemo(getData,[])


  useEffect(() => {
    if(filter === '') {
      setDataToShow(data)
    } else {
      const newData = data.filter(item => 
        item.name.toLowerCase().includes(filter.toLocaleLowerCase()) || 
        item.author.toLocaleLowerCase().includes(filter.toLocaleLowerCase()) ||
        item.name.toLocaleLowerCase().includes(filter.toLocaleLowerCase()) )
      setDataToShow(newData)
    }
  }, [filter, data])

  return {
    data: dataToShow,
    setFilter,
    isLoading
  }
}