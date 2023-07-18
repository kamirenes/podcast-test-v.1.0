import Header from "../../components/Header/Header"
import useScreen from "./useScreen"
import {Table} from 'antd'

export default () => {
  const { columns, data, list, isLoading } = useScreen() // TODO: add the correct podcast id
  return (
    <>
      <Header isLoading={isLoading}/>
      <h5>{data?.name}</h5>
      <br/>
      <h5>by {data?.artistName}</h5>
      <br/>
      <h5>Descriotion</h5>
      <br/>
      <h5>{data?.description}</h5>
      <br/>
      <h5>{data?.description}</h5>
      <br/>
      <Table dataSource={list} columns={columns}>
      </Table>
    </>
  )
}