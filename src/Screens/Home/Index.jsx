import React, { useEffect } from 'react'
import ExtractData from '../../Common/DataExtracter'
import Translate from '../../Common/Translat'
import TranslateObject from '../../Common/TranslateObject'
import ABCsection from './ABCsection'
import Banner from './Banner'
import PostArtical from './PostArtical'
import PoweredbyCommunity from './PoweredbyCommunity'
import TrendingSection from './TrendingSection'
import { useLocation } from 'react-router-dom';

const Home = () => {
    const location = useLocation();
    useEffect(() => {
      if (location.pathname === "/#trending") {
        const trendingSection = document.getElementById("trending");
        if (trendingSection) { // Check if element was found
          trendingSection.scrollIntoView({ behavior: "smooth" }); // Use smooth scrolling
        } else {
          console.error("Could not find element with id 'trending'");
        }
      }
    }, [location.pathname]);
    


  return (
    <div>
        <Banner/>
        <ABCsection/>
        <TrendingSection/>
        <PoweredbyCommunity/>
        <PostArtical/>
        {/* <ExtractData/> */}
        {/* <TranslateObject data={names}/> */}
    </div>
  )
}

export default Home