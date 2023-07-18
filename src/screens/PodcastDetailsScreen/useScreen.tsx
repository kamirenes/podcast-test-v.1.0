import { useParams, Link } from 'react-router-dom';
import { useMemo, useState } from "react"

import podcarterAPI from '../../api/PodcastApi'
import { TChapter, TPodcast } from "../../api/types"

export default () => {
  const { id } = useParams()
  const[data, setData] = useState<TPodcast|null>(null)
  const[list, setList] = useState<TChapter[]|[]>([])
  const[isLoading, setIsLoading] = useState<boolean>(true)

  const getData = async() => {
    await setIsLoading(true)
    if (id) {
      const response = await podcarterAPI.podcasterAPI.getPodcast(id) || null
      await setData(response?.podcatsDetails || null)

      const chaptersList = response?.podcatsDetails ? await podcarterAPI.podcasterAPI.getChapters(response?.podcatsDetails?.feedUrl) : []
      setList(chaptersList)
    }
    await setIsLoading(false)
  }
  
  useMemo(getData,[])

  const columns = [
    {
      title: 'Title',
      dataIndex: ['title', 'id'],
      key: 'title',
      render: (text: string, record: any) => <Link 
        to={`/podcast/${id}/episode/${record.id}`}
        state={{episode: list.filter(item => item.id === record.id)[0], podcast: data}}
        >
          {record.title}
        </Link>
    },
    {
      title: 'Date',
      dataIndex: 'date',
      key: 'date',
    },
    {
      title: 'Duration',
      dataIndex: 'duration',
      key: 'duration',
    },
  ];

  return {
    columns,
    data,
    list,
    isLoading
  }
}