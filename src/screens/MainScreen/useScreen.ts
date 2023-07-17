import { useEffect, useLayoutEffect, useMemo, useState } from 'react'
import podcarterAPI from '../../api/PodcastApi'
import { TPodCastSummary } from '../../api/types';

export default () => {
  const[filter, setFilter] = useState<string>('')
  const[data, setData] = useState<TPodCastSummary[]|[]>([])
  const[dataToShow, setDataToShow] = useState<TPodCastSummary[]|[]>([])
  
  const getData = async() => {
    const response = await podcarterAPI.podcasterAPI.getAll() || []
    setData(response)
  }

 useMemo(getData,[])


  useEffect(() => {
    console.info(filter)
    if(filter === '') {
      setDataToShow(data)
    } else {
      const newData = data.filter(item => item.name.toLowerCase().includes(filter.toLocaleLowerCase()) || item.author.toLocaleLowerCase().includes(filter.toLocaleLowerCase()) )
      setDataToShow(newData)
    }
  }, [filter, data])

  return {
    data: dataToShow,
    setFilter
  }
}