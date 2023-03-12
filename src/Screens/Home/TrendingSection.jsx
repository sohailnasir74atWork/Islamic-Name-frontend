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
            <div className='col custimize-btn-cont'>
              <div className='col flex-center p-0 w-100'>
                <button
                  className={`custimize-btn ml-0 ${activeBtnIndex === 0 ? 'active' : ''}`}
                  onClick={() => handleButtonClick(0)}
                >
                  Trending
                </button>
              </div>
              <div className='col flex-center p-0 w-100'>
                <button
                  className={`custimize-btn  ${activeBtnIndex === 1 ? 'active' : ''}`}
                  onClick={() => handleButtonClick(1)}
                >
                  Popular
                </button>
              </div>
              <div className='col flex-center p-0 w-100'>
                <button
                  className={`custimize-btn  ${activeBtnIndex === 2 ? 'active' : ''}`}
                  onClick={() => handleButtonClick(2)}
                >
                  New Added
                </button>
              </div>
              <div className='col flex-center p-0 w-100'>
                <button
                  className={`custimize-btn  ${activeBtnIndex === 3 ? 'active' : ''}`}
                  onClick={() => handleButtonClick(3)}
                >
                  Qurnic Name
                </button>
              </div>
              <div className='col flex-center p-0 w-100'>
                <button
                  className={`custimize-btn  ${activeBtnIndex === 4 ? 'active' : ''}`}
                  onClick={() => handleButtonClick(4)}
                >
                  Allah's Name
                </button>
              </div>
              <div className='col flex-center p-0 w-100'>
                <button
                  className={`custimize-btn  ${activeBtnIndex === 5 ? 'active' : ''}`}
                  onClick={() => handleButtonClick(5)}
                >
                  Muhammad's Name
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