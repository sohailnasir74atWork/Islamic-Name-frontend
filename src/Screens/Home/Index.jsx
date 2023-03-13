import React from 'react'
import ExtractData from '../../Common/DataExtracter'
import ABCsection from './ABCsection'
import Banner from './Banner'
import PostArtical from './PostArtical'
import PoweredbyCommunity from './PoweredbyCommunity'
import TrendingSection from './TrendingSection'


const Home = () => {
  return (
    <div>
        <Banner/>
        <ABCsection/>
        <TrendingSection/>
        <PoweredbyCommunity/>
        <PostArtical/>
    </div>
  )
}

export default Home