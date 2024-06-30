import React, { useState } from 'react'
import './Home.css'
import Header from '../../components/Header/Header'
import ExploreService from '../../components/ExploreService/ExploreService'
import ServiceDisplay from '../../components/ServiceDisplay/ServiceDisplay'
import AppDownload from '../../components/AppDownload/AppDownload'
const Home = () => {
  const[category,setcategory]=useState("All");
  return (
    <div>
      <Header/>
      <ExploreService category={category} setcategory={setcategory}/>
      <ServiceDisplay category={category}/>
      <AppDownload/>
    </div>
  )
}

export default Home