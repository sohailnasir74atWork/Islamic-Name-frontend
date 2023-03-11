import React from 'react'
import TrendingCard from './Cards/TrendingCard'
import "./Style/TrendingSection.scss"
import { useState } from 'react';

const TrendingSection = () => {
  const [activeBtnIndex, setActiveBtnIndex] = useState(0);

  const handleButtonClick = (index) => {
    setActiveBtnIndex(index);
  };

  return (
    <div>
      <div className='container' data-aos="fade-up">
        <h2 className='section-title-main'>SEARCH NAMES BY FEATURES</h2>
        <div className='section-container'>
          <div className='container w-30'>
            <div className='col'>
              <div className='col flex-center p-0 trending-card'>
                <button
                  className={`custimize-btn ml-0 ${activeBtnIndex === 0 ? 'active' : ''}`}
                  onClick={() => handleButtonClick(0)}
                >
                  BOYES NAME
                </button>
              </div>
              <div className='col flex-center p-0 trending-card'>
                <button
                  className={`custimize-btn  ${activeBtnIndex === 1 ? 'active' : ''}`}
                  onClick={() => handleButtonClick(1)}
                >
                  GIRLS NAME
                </button>
              </div>
            </div>
          </div>
          <div className='trending-cards-cont'>
            <TrendingCard />
          </div>
        </div>
      </div>
    </div>
  )
}


export default TrendingSection