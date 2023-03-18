import React from 'react'
import TrendingCard from './Cards/TrendingCard'
import "./Style/TrendingSection.scss"
import { useState } from 'react';
import { useRef } from 'react';
import ExtractData from '../../Common/DataExtracter';
const TrendingSection = () => {
  const [activeBtnIndex, setActiveBtnIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const toggleTab = () => {
    setIsOpen(!isOpen);
  }

  const handleButtonClick = (index) => {
    setActiveBtnIndex(index);
  };

  return (
    <div id="trending">
      <div className='container' data-aos="fade-up">
        <div className='section-title-main'>
        <h2 >SEARCH NAMES BY FEATURES</h2>
        <h3>فلٹرز کے ذریعے نام تلاش کریں
</h3>
        </div>
        <div className="sticky-button-trending" onClick={toggleTab}>
      <span>Select Filters</span>
      <i className={`fa-solid fa-bars ${isOpen ? 'open' : ''}`}></i>
      {isOpen && (
        <div className="filter-tab">
         <p>Allah's Name</p>
         <p>Trending Name</p>
         <p>Popular Name</p>
         <p>New Added</p>
         <p>Muhammad's Name</p>
         <p></p>
        </div>
      )}
    </div>
        <div className='section-container'>
          <div className='container w-30 p-0'>
            <div className='col custimize-btn-cont'>
              <div className='col flex-center p-0 w-100'>
                <button
                  className={`custimize-btn ml-0 m-0 ${activeBtnIndex === 0 ? 'active' : ''}`}
                  onClick={() => handleButtonClick(0)}
                >
                  Trending
                </button>
              </div>
              <div className='col flex-center p-0 w-100'>
                <button
                  className={`custimize-btn m-0  ${activeBtnIndex === 1 ? 'active' : ''}`}
                  onClick={() => handleButtonClick(1)}
                >
                  Popular
                </button>
              </div>
              <div className='col flex-center p-0 w-100'>
                <button
                  className={`custimize-btn m-0  ${activeBtnIndex === 2 ? 'active' : ''}`}
                  onClick={() => handleButtonClick(2)}
                >
                  New Added
                </button>
              </div>
              <div className='col flex-center p-0 w-100'>
                <button
                  className={`custimize-btn m-0  ${activeBtnIndex === 3 ? 'active' : ''}`}
                  onClick={() => handleButtonClick(3)}
                >
                  Qurnic Name
                </button>
              </div>
              <div className='col flex-center p-0 w-100 m-0'>
                <button
                  className={`custimize-btn m-0  ${activeBtnIndex === 4 ? 'active' : ''}`}
                  onClick={() => handleButtonClick(4)}
                >
                  Allah's Name
                </button>
              </div>
              <div className='col flex-center p-0 w-100 m-0'>
                <button
                  className={`custimize-btn m-0  ${activeBtnIndex === 5 ? 'active' : ''}`}
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
          <div></div>
        </div>
      </div>
    </div>
  )
}


export default TrendingSection