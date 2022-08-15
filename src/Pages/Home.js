import React from 'react'
import Banner from '../Components/Banner'
import MissionVision from '../Components/Mission&Vision'
import Navbar from '../Components/Navbar'
import Tags from '../Components/Tags'

function Home() {
  return (
    <div className='home-container'>
        <Navbar />
        <Banner />
        <Tags />
        <MissionVision />
    </div>
  )
}

export default Home