import React from 'react'
import ABCsection from './ABCsection'
import Banner from './Banner'
import PoweredbyCommunity from './PoweredbyCommunity'
import TrendingSection from './TrendingSection'


const Home = () => {
  return (
    <div>
        <Banner/>
        <ABCsection/>
        <TrendingSection/>
        <PoweredbyCommunity/>
    </div>
  )
}

export default Home