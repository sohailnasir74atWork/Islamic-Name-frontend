import React from 'react'
import "./Style/Banner.scss"
import '@fortawesome/fontawesome-free/css/all.css';
import { useState } from 'react';
import axios from 'axios';
import Translate from '../../Common/Translat';
const Banner = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [showDetail, setShowDetail] = useState(false);
  const [info, setInfo] = useState(null)
  const handleShowDetail = (index) => {
    // const clickedKey = e.target.getAttribute('key');
  const clickedObject = searchResults[index];
  setInfo(clickedObject)
    setShowDetail(!showDetail)
  }



  const handleSearch = async (event) => {
    const query = event.target.value;
    setSearchQuery(query);
    if (query.length < 2) {
      setSearchResults([]);
      return;
 }
    try {
      const response = await axios.get(`${process.env.REACT_APP_URL_SERVER}/names`, {
        params: { search: query },
      });
      setSearchResults(response.data);
    } catch (error) {
      console.error(error);
      alert('Failed to search for names.');
    }
  };
  const handleClickSearch = ()=> {
    if(searchResults.length<1) return
    setInfo( searchResults[0] )
    setShowDetail(true)
}
  console.log(info)
  return (
    <div>
      <div className='banner-container'>
        <h2 className='banner-text'>Discover meaningful Muslim Baby Names for your Little One</h2>
        <h2 className='banner-urdu' style={{ fontFamily: 'Jameel Noori Nastaleeq' }}>بچوں کے خوبصورت اسلامی نام</h2>
        <div class="input-group mt-3 search-field">
          <input value={searchQuery}
            onChange={handleSearch} 
            onKeyDown={(event) => {
              if (event.key === 'Enter') {
                handleClickSearch();
              }
            }} 
            type="text" class="form-control h-50" placeholder="Search Name" />
          <div class="input-group-append">
            <button class="btn btn-outline-secondary h-50" type="button" onClick={handleClickSearch}>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
              </svg>
            </button>
          </div>
        </div>
        <div className='search-tab'>
          <ul>
          {searchResults.map((name, index) => (
    <li key={index} onClick={()=>handleShowDetail(index)}>{name.name}</li>
))}
          </ul>
        </div>
        {showDetail && <div className='show-detail'>
          <div className='show-detail-cont'>
            <span className='show-detail-close' onClick={handleShowDetail}>
              <button type="button" class="btn-close" aria-label="Close"></button>
          </span>
            <div className='pop-up-info container p-2'>
              <span className='row m-1'>
              <td className='col-4'>Name:</td>
              <td className='col-8'>{info.name}</td>
              </span>
              <span className='row m-1'>
              <td className='col-4'>Urdu Name:</td>
              <td className='col-8 urdu-cont justify-content-start d-flex'>{info.urduName}</td>
              </span>
              <span className='row m-1'>
              <td className='col-4'>English Meaning:</td>
              <td className='col-8'>{info.englishMeaning}</td>
              </span >
              <span className='row m-1'>
              <td className='col-4'>Urdu Meaning:</td>
              <td className='col-8'>{<Translate text={info.englishMeaning} bg="var(--color-three)" cl="var(--color-one)" />}</td>
              </span>
            </div>
          </div>
        </div>}
      </div>
    </div>
  )
}

export default Banner