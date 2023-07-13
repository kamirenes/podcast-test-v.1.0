import useScreen from "./useScreen"

export default () => {
  const { data } = useScreen({ 
    id: "1",
    artwork: '',
    name: '',
    feedUrl: '',
    artistName: ''}) // TODO: add the correct podcast 
  
  return (
    <></>
  )
}