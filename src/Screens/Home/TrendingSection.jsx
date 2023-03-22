import React, { useEffect } from 'react'
import TrendingCard from './Cards/TrendingCard'
import "./Style/TrendingSection.scss"
import { useState } from 'react';
import { useRef } from 'react';
import ExtractData from '../../Common/DataExtracter';
import TrendingCardHome from './Cards/TrendingCardHome';
import axios, { all } from 'axios';
const TrendingSection = () => {
  const [activeBtnIndex, setActiveBtnIndex] = useState(0)
  const [trendingGirls, setTrendingGirls] = useState([]);
  const [trendingBoys, setTrendingBoys] = useState([]);
  const [quranicGirls, setQuranicGirls] = useState([]);
  const [quranicBoys, setQuranicBoys] = useState([]);
  const [allah, setAllah] = useState([]);
  const [muhammad, setMuhammad] = useState([]);
  const [loading, setLoading] = useState(false)
  const [isOpen, setIsOpen] = useState(false);
  const toggleTab = () => {
    setIsOpen(!isOpen);
  }

  const handleButtonClick = (index) => {
    setActiveBtnIndex(index);
  };
  //////////////////////////////api call///////////////////////
  const getData = async (id, currentPage) => {

    try {
      ////////////////////call-1////////////////////////////////////////////
      const response1 = await axios.get(`${process.env.REACT_APP_URL_SERVER}/names/quranic/boys`);
      const quranicBoys = response1.data;
      setQuranicBoys(quranicBoys)
      ////////////////////call-2////////////////////////////////////////////
      const response2 = await axios.get(`${process.env.REACT_APP_URL_SERVER}/names/quranic/girls`);
      const quranicGirls = response2.data;
      setQuranicGirls(quranicGirls)
      ////////////////////call-3////////////////////////////////////////////
      const response3 = await axios.get(`${process.env.REACT_APP_URL_SERVER}/names/trending/boys`);
      const trendingBoys = response3.data;
      setTrendingBoys(trendingBoys)
      ////////////////////call-4////////////////////////////////////////////
      const response4 = await axios.get(`${process.env.REACT_APP_URL_SERVER}/names/trending/girls`);
      const trendingGirls = response4.data;
      setTrendingGirls(trendingGirls)
      ////////////////////call-5////////////////////////////////////////////
      const response5 = await axios.get(`${process.env.REACT_APP_URL_SERVER}/names/allah`);
      const allah = response5.data;
      setAllah(allah)
      ////////////////////call-6////////////////////////////////////////////
      const response6 = await axios.get(`${process.env.REACT_APP_URL_SERVER}/names/muhammad`);
      const muhammad = response6.data;
      setMuhammad(muhammad)
      setLoading(false)
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    getData();
  }, []);
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
              <p onClick={() => handleButtonClick(0)}>Trending Names - Boys</p>
              <p onClick={() => handleButtonClick(1)}>Trending Names - Girls</p>
              <p onClick={() => handleButtonClick(2)}>Quranic Names - Boys</p>
              <p onClick={() => handleButtonClick(3)}>Quranic Names - Girls</p>
              <p onClick={() => handleButtonClick(4)}>Allah's Name</p>
              <p onClick={() => handleButtonClick(5)}>Muhammads's Name</p>
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
                  Trending Names - Boys
                </button>
              </div>
              <div className='col flex-center p-0 w-100'>
                <button
                  className={`custimize-btn m-0  ${activeBtnIndex === 1 ? 'active' : ''}`}
                  onClick={() => handleButtonClick(1)}
                >
                  Trending Names - Girls
                </button>
              </div>
              <div className='col flex-center p-0 w-100'>
                <button
                  className={`custimize-btn m-0  ${activeBtnIndex === 2 ? 'active' : ''}`}
                  onClick={() => handleButtonClick(2)}
                >
                  Quranic Names - Boys
                </button>
              </div>
              <div className='col flex-center p-0 w-100'>
                <button
                  className={`custimize-btn m-0  ${activeBtnIndex === 3 ? 'active' : ''}`}
                  onClick={() => handleButtonClick(3)}
                >
                  Quranic Names - Girls               </button>
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
          <TrendingCardHome 
  data={activeBtnIndex === 0 ? trendingBoys : 
        activeBtnIndex === 1 ? trendingGirls :
        activeBtnIndex === 2 ? quranicBoys :
        activeBtnIndex === 3 ? quranicGirls :
        activeBtnIndex === 4 ? allah :
        activeBtnIndex === 5 ? muhammad :
        null
  }
/>

          </div>
          <div></div>
        </div>
      </div>
    </div>
  )
}


export default TrendingSection