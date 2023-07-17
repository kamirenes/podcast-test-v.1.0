import useScreen from "./useScreen"
import Filter from '../../components/Filter/Filter';
import React from "react";
import PodcastCard from "../../components/PodcastCard/PodcastCard";
import Header from "../../components/Header/Header";

export default () => {
  const { data, setFilter } = useScreen()
  
  return (
    <>
      <Header />
      <Filter setFilter={setFilter} total={data.length} />
      {data.map(item => <PodcastCard data={item}/>)}
    </>
  )
}