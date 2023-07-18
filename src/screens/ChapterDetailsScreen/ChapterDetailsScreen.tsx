import { Card, Col, Row } from "antd"
import Header from "../../components/Header/Header"
import useScreen from "./useScreen"
import PodcastSummaryCard from "../../components/PodcastSummaryCard/PodcastSummaryCard"
import styles from './ChapterDetailsScreen.module.scss'

export default () => {
  const { dataChapter, dataPodcast, isLoading } = useScreen() 
  
  return (
    <>
      <Header isLoading={isLoading}/>
      <Row>
        <Col span={6}>
          <PodcastSummaryCard
            name={dataPodcast?.name || ''}
            author={dataPodcast?.artistName || ''}
            image={dataPodcast?.image|| ''}
            description={dataPodcast?.description || ''}
          />
        </Col>
        <Col span={18}>
          <Card className={styles.card}>
            <h3>{dataChapter.title}</h3>
            <h5 className={styles.text}>{dataChapter.content.replace(/<[^>]+>/g, '')}</h5>
            <audio src={dataChapter.url} controls style={{ width: '100%' }}/>
          </Card>
        </Col>
      </Row>
      
    </>
  )
}