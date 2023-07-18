import { useEffect, useMemo, useState,  } from 'react'
import podcarterAPI from '../../api/PodcastApi'
import { TPodCastSummary } from '../../api/types';
import { isRefreshed } from '../../utils/functions';
import { async } from 'q';

export default () => {

  const[filter, setFilter] = useState<string|null>('')
  const[data, setData] = useState<TPodCastSummary[]|[]>([])
  const[isLoading, setIsLoading] = useState<boolean>(true)
  const[dataToShow, setDataToShow] = useState<TPodCastSummary[]|[]>([])

  const handleFilter = (newFilter: string) => {
    setFilter(newFilter)
  }
  
  const getData = async() => {
    const response = await podcarterAPI.podcasterAPI.getAll() || []
    window.localStorage.setItem('podcatsList', JSON.stringify(response))
    await setIsLoading(true)
    await setData(response)
    setIsLoading(false)
  }

  const getDataFromLocalStore = async () => {
    const response = window.localStorage.getItem('podcatsList')
    await setIsLoading(true)
    if (response && response !== null) {
      await setData(JSON.parse(response))
    }
    await setIsLoading(false)
  }

  useEffect(() => {
    if (!window.localStorage.getItem('date')) {
      window.localStorage.setItem('date', new Date().toString())
      getData()
    } else {
      const date = window.localStorage.getItem('date')
      if (date !== null && isRefreshed(date)) {
        getData()
        window.localStorage.setItem('date', new Date().toString())
      } else {
        getDataFromLocalStore()
      }
    }
  }, [])


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
    setFilter: handleFilter,
    isLoading
  }
}