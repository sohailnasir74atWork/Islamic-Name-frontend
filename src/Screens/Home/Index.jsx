import React from 'react'
import ExtractData from '../../Common/DataExtracter'
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
        <ExtractData/>
    </div>
  )
}

export default Home