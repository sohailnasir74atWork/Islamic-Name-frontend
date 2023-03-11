import React from 'react'
import "./Style/Banner.scss"
import '@fortawesome/fontawesome-free/css/all.css';

const Banner = () => {
  return (
    <div>
    <div className='banner-container'>
     
       
        <h2 className='banner-text'>Discover meaningful Muslim Baby Names for your Little One</h2>
        <h2 className='banner-urdu' style={{ fontFamily: 'Jameel Noori Nastaleeq' }}>بچوں کے خوبصورت اسلامی نام</h2>
        <div class="input-group mt-3 mb-3 search-field">
  <input type="text" class="form-control h-50" placeholder="Search Name"/>
  <div class="input-group-append">
    <button class="btn btn-outline-secondary h-50" type="button">
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
</svg>
      </button>
  </div>
</div>
  </div>
    
    </div>
  )
}

export default Banner