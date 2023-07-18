import {Card, Image} from 'antd'
import { TPodCastSummary } from '../../api/types';
import { Link } from 'react-router-dom';
import styles from './PodcastCard.module.scss'

export default ({data}: {data:TPodCastSummary}) => {
  const {author, id, img, name, summary} = data
  return(
    <Link to={`/podcast/${id}`}>
      <Card className={styles.card}>
        <div className={styles.imageContainer}>
          <Image  width={80} src={img} className={styles.image}/>
        </div>
        <h4 className={styles.text}>{name}</h4>
        <h5 className={styles.authorText}>Author: {author}</h5>
      </Card>
    </Link>
    
  )
}