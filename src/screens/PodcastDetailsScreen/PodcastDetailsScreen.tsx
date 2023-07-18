import {Card, Col, Row, Table} from 'antd'
import Header from "../../components/Header/Header"
import PodcastSummaryCard from "../../components/PodcastSummaryCard/PodcastSummaryCard"
import useScreen from "./useScreen"
import styles from './PodcastDetailsScreen.module.scss'

export default () => {
  const { columns, data, list, isLoading, image, description } = useScreen()
  return (
    <>
      <Header isLoading={isLoading}/>
      <Row>
        <Col span={6}>
          <PodcastSummaryCard
            name={data?.name || ''}
            author={data?.artistName || ''}
            image={image|| ''}
            description={description}
          />
        </Col>
        <Col span={18}>
          <Card className={styles.totalCard}>
            <h3>Episodes: {list.length}</h3>
          </Card>
          <Table dataSource={list} columns={columns} className={styles.tableContailer}  pagination={false}/>
        </Col>
      </Row>
    </>
  )
}