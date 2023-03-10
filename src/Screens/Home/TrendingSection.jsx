import React from 'react'
import TrendingCard from './Cards/TrendingCard'
import "./Style/TrendingSection.scss"
const TrendingSection = () => {
  return (
    <div>
        <div className='container'>
        <div className='row'>
        <div className='col flex-center'><button className='custimize-btn'>TRENDING</button></div>
        <div className='col flex-center'><button className='custimize-btn'>POPULAR</button></div>
        <div className='col flex-center'><button className='custimize-btn'>NEW ADDED</button></div>
        </div>
        <div className='trending-cards-cont'>
            <TrendingCard />
            <TrendingCard />
        </div>
         </div>
    </div>
  )
}

export default TrendingSection