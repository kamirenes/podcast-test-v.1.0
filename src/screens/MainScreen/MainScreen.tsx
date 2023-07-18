import useScreen from "./useScreen"
import Filter from '../../components/Filter/Filter';
import PodcastCard from "../../components/PodcastCard/PodcastCard";
import Header from "../../components/Header/Header";
import { Col, Layout, Row } from "antd";
import styles from './MainScreen.module.scss'

export default () => {
  const { data, setFilter, isLoading } = useScreen()
  const {Header: LHedaer} = Layout
  
  return (
    <Layout style={{ padding: 0, backgroundColor: 'white' }}>
      <LHedaer style={{ padding: 0, backgroundColor: 'white' }}>
        <Header isLoading={isLoading}/>
      </LHedaer>
      <Filter setFilter={setFilter} total={data.length} />
      <Row className={styles.row}>
        {data.map(item => (
          <Col span={6}>
            <PodcastCard data={item}/>
          </Col>
        ))}
      </Row>
    </Layout>
  )
}