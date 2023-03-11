import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import ShapeAnimation from '../../Common/ShapeContainer'
import banner from "../../images/banner.svg"
import search from "../../images/search.svg"
import "./Style/Banner.scss"
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
    <i class="far fa-search"></i>    </button>
  </div>
</div>
  </div>
    
    </div>
  )
}

export default Banner