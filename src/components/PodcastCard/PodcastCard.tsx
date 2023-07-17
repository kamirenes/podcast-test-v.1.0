import {Card, Image} from 'antd'
import { TPodCastSummary } from '../../api/types';

export default ({data}: {data:TPodCastSummary}) => {
  const {author, id, img, name, summary} = data
  return(
    <Card>
      <Image  />
      <h1>{name}</h1>
      <br/>
      <h1>{author}</h1>
      <br/>
      <h1>{summary}</h1>
    </Card>
  )
}