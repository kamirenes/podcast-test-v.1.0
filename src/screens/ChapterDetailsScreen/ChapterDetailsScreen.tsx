import Header from "../../components/Header/Header"
import useScreen from "./useScreen"

export default () => {
  const { dataChapter, dataPodcast, isLoading } = useScreen() // TODO: add the correct podcast 
  
  return (
    <>
      <Header isLoading={isLoading}/>
      <h5>{dataPodcast.name}</h5>
      <h5>by {dataPodcast.artistName}</h5>
      <br />
      <h5>{dataChapter.title}</h5>
      <br />
      <h5>{dataChapter.contet}</h5>
      <br />
      <h5>{dataChapter.url}</h5>
      <br />
    </>
  )
}