import React, { useEffect } from 'react'
import TrendingCard from './Cards/TrendingCard'
import "./Style/TrendingSection.scss"
import { useState } from 'react';
import { useGlobalState } from "../../GlobelState";
import { useRef } from 'react';
import ExtractData from '../../Common/DataExtracter';
import TrendingCardHome from './Cards/TrendingCardHome';
import axios, { all } from 'axios';
const TrendingSection = () => {
  // const [activeBtnIndex, setActiveBtnIndex] = useState(0)
  const [trendingGirls, setTrendingGirls] = useState([]);
  const [trendingBoys, setTrendingBoys] = useState([]);
  const [quranicGirls, setQuranicGirls] = useState([]);
  const [quranicBoys, setQuranicBoys] = useState([]);
  const [allah, setAllah] = useState([]);
  const [muhammad, setMuhammad] = useState([]);
  const [loading, setLoading] = useState(true)
  const [isOpen, setIsOpen] = useState(false);
  const [totalPagesTrendingBoys, setTotalPagesTrendingBoys] = useState(0);
  const [totalPagesTrendingGirls, setTotalPagesTrendingGirls] = useState(0);
  const [totalPagesQuranicBoys, setTotalPagesQuranicBoys] = useState(0);
  const [totalPagesQuranicGirls, setTotalPagesQuranicGirls] = useState(0);
  const [totalPagesAllah, setTotalPagesAllah] = useState(0);
  const [totalPagesMuhammad, setTotalPagesMuhammad] = useState(0);
  const [currentTrendingBoys, setCurrentTrendingBoys] = useState(1);
  const [currentTrendingGirls, setCurrentTrendingGirls] = useState(1);
  const [currentQuranicBoys, setCurrentQuranicBoys] = useState(1);
  const [currentQuranicGirls, setCurrentQuranicGirls] = useState(1);
  const [currentAllah, setCurrentAllah] = useState(1);
  const [currentMuhammad, setCurrentMuhammad] = useState(1);
  const { activeBtnIndex, handleButtonClick } = useGlobalState();
  const toggleTab = () => {
    setIsOpen(!isOpen);
  }
  const handlePageChange = (pageNumber) => {
    setLoading(true)

    if (activeBtnIndex === 0) {
      setCurrentTrendingBoys(pageNumber);
    } else if (activeBtnIndex === 1) {
      setCurrentTrendingGirls(pageNumber);
    } else if (activeBtnIndex === 2) {
      setCurrentQuranicBoys(pageNumber);
    } else if (activeBtnIndex === 3) {
      setCurrentQuranicGirls(pageNumber);
    } else if (activeBtnIndex === 4) {
      setCurrentAllah(pageNumber);
    } else if (activeBtnIndex === 5) {
      setCurrentMuhammad(pageNumber);
    }
  };
  console.log(currentTrendingBoys)
  // const handleButtonClick = (index) => {
  //   setActiveBtnIndex(index);
  // };
  //////////////////////////////api call///////////////////////
  // const getData = async () => {

  //   try {
  //     ////////////////////call-1////////////////////////////////////////////
  //     const response3 = await axios.get(`${process.env.REACT_APP_URL_SERVER}/names/trending/boys?page=${currentTrendingBoys}`);
  //     const trendingBoys = response3.data.allNames;
  //     setTrendingBoys(trendingBoys)
  //     setTotalPagesTrendingBoys(response3.data.totalPages)
  //     ////////////////////call-2////////////////////////////////////////////
  //     const response4 = await axios.get(`${process.env.REACT_APP_URL_SERVER}/names/trending/girls?page=${currentTrendingGirls}`);
  //     const trendingGirls = response4.data.allNames;
  //     setTrendingGirls(trendingGirls)
  //     setTotalPagesTrendingGirls(response4.data.totalPages)

  //     ////////////////////call-3////////////////////////////////////////////
  //     const response1 = await axios.get(`${process.env.REACT_APP_URL_SERVER}/names/quranic/boys?page=${currentQuranicBoys}`);
  //     const quranicBoys = response1.data.allNames;
  //     setQuranicBoys(quranicBoys)
  //     setTotalPagesQuranicBoys(response1.data.totalPages)

  //     ////////////////////call-4////////////////////////////////////////////
  //     const response2 = await axios.get(`${process.env.REACT_APP_URL_SERVER}/names/quranic/girls?page=${currentQuranicGirls}`);
  //     const quranicGirls = response2.data.allNames;
  //     setQuranicGirls(quranicGirls)
  //     console.log(response2.data.totalPages)
  //     setTotalPagesQuranicGirls(response2.data.totalPages)

  //     ////////////////////call-5////////////////////////////////////////////
  //     const response5 = await axios.get(`${process.env.REACT_APP_URL_SERVER}/names/allah?page=${currentAllah}`);
  //     const allah = response5.data.allNames;
  //     setAllah(allah)
  //     setTotalPagesAllah(response5.data.totalPages)

  //     ////////////////////call-6////////////////////////////////////////////
  //     const response6 = await axios.get(`${process.env.REACT_APP_URL_SERVER}/names/muhammad?page=${currentMuhammad}`);
  //     const muhammad = response6.data.allNames;
  //     setMuhammad(muhammad)
  //     setTotalPagesMuhammad(response6.data.totalPages)
  //     setLoading(false)

  //   } catch (error) {
  //     console.log(error)
  //   }
  // }

    
// useEffect(() => {
//     getData();
//   }, [currentTrendingBoys, currentTrendingGirls, currentQuranicBoys, currentQuranicGirls, currentAllah, currentMuhammad]);


const getTrendingBoys = async () => {
  try {
    const response = await axios.get(`${process.env.REACT_APP_URL_SERVER}/names/trending/boys?page=${currentTrendingBoys}`);
    setTrendingBoys(response.data.allNames);
    setTotalPagesTrendingBoys(response.data.totalPages);
    setLoading(false);
  } catch (error) {
    console.log(error);
  }
}

const getTrendingGirls = async () => {
  try {
    const response = await axios.get(`${process.env.REACT_APP_URL_SERVER}/names/trending/girls?page=${currentTrendingGirls}`);
    setTrendingGirls(response.data.allNames);
    setTotalPagesTrendingGirls(response.data.totalPages);
    setLoading(false);
  } catch (error) {
    console.log(error);
  }
}

const getQuranicBoys = async () => {
  try {
    const response = await axios.get(`${process.env.REACT_APP_URL_SERVER}/names/quranic/boys?page=${currentQuranicBoys}`);
    setQuranicBoys(response.data.allNames);
    setTotalPagesQuranicBoys(response.data.totalPages);
    setLoading(false);
  } catch (error) {
    console.log(error);
  }
}

const getQuranicGirls = async () => {
  try {
    const response = await axios.get(`${process.env.REACT_APP_URL_SERVER}/names/quranic/girls?page=${currentQuranicGirls}`);
    setQuranicGirls(response.data.allNames);
    setTotalPagesQuranicGirls(response.data.totalPages);
    setLoading(false);
  } catch (error) {
    console.log(error);
  }
}

const getAllah = async () => {
  try {
    const response = await axios.get(`${process.env.REACT_APP_URL_SERVER}/names/allah?page=${currentAllah}`);
    setAllah(response.data.allNames);
    setTotalPagesAllah(response.data.totalPages);
    setLoading(false);
  } catch (error) {
    console.log(error);
  }
}

const getMuhammad = async () => {
  try {
    const response = await axios.get(`${process.env.REACT_APP_URL_SERVER}/names/muhammad?page=${currentMuhammad}`);
    setMuhammad(response.data.allNames);
    setTotalPagesMuhammad(response.data.totalPages);
    setLoading(false);
  } catch (error) {
    console.log(error);
  }
}

const getData = async () => {
  try {
    await Promise.all([getTrendingBoys(), getTrendingGirls(), getQuranicBoys(), getQuranicGirls(), getAllah(), getMuhammad()]);
    setLoading(false);
  } catch (error) {
    console.log(error);
  }
}
useEffect(() => {
  getTrendingBoys();
}, [currentTrendingBoys]);

useEffect(() => {
  getTrendingGirls();
}, [currentTrendingGirls]);
useEffect(() => {
  getQuranicBoys();
}, [currentQuranicBoys]);
useEffect(() => {
  getQuranicGirls();
}, [currentQuranicGirls]);
useEffect(() => {
  getAllah();
}, [currentAllah]);
useEffect(() => {
  getMuhammad();
}, [currentMuhammad]);

useEffect(() => {
  getData();
}, [activeBtnIndex]);



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
            {loading && (<div class="d-flex justify-content-center m-auto">
  <div class="spinner-border spinner-border-custom" role="status">
    <span class="sr-only">Loading...</span>
  </div>
</div>)}
          {!loading && <TrendingCardHome 
  data={activeBtnIndex === 0 ? trendingBoys : 
        activeBtnIndex === 1 ? trendingGirls :
        activeBtnIndex === 2 ? quranicBoys :
        activeBtnIndex === 3 ? quranicGirls :
        activeBtnIndex === 4 ? allah :
        activeBtnIndex === 5 ? muhammad :
        null
  }
  totalPages={
    activeBtnIndex === 0 ? totalPagesTrendingBoys : 
    activeBtnIndex === 1 ? totalPagesTrendingGirls :
    activeBtnIndex === 2 ? totalPagesQuranicBoys :
    activeBtnIndex === 3 ? totalPagesQuranicGirls :
    activeBtnIndex === 4 ? totalPagesAllah :
    activeBtnIndex === 5 ? totalPagesMuhammad :
    null
  }
  currentPage={
    activeBtnIndex === 0 ? currentTrendingBoys : 
    activeBtnIndex === 1 ? currentTrendingGirls :
    activeBtnIndex === 2 ? currentQuranicBoys :
    activeBtnIndex === 3 ? currentQuranicGirls :
    activeBtnIndex === 4 ? currentAllah :
    activeBtnIndex === 5 ? currentMuhammad :
    null
  }
  onPageChange={handlePageChange}
/>}
          </div>
          <div></div>
        </div>
      </div>
    </div>
  )
}


export default TrendingSection