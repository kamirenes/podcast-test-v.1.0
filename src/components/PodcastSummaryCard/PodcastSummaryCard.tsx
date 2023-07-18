import { Card, Image } from 'antd'
import { PodcastSummaryCardProps } from './types';
import styles from './PodcastSummaryCard.module.scss'

export default ({name, author, description, image}: PodcastSummaryCardProps) => {
  return <Card className={styles.card}>
    <div className={styles.imageContainer}>
      <Image src={image} width={200} height={200} className={styles.image}/>
    </div>
    <div className={styles.mainDataContainer}>
      <h4>{name}</h4>
      <h5 className={styles.littleText}>by {author}</h5>
      <br />
    </div>
    <div className={styles.DescriotionContainer}>
      <h4>Description:</h4>
      <h5 className={styles.littleText}>{description}</h5>
    </div>
  </Card>
}
