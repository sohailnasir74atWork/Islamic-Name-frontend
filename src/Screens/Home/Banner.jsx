import React from 'react'
import banner from "../../images/banner.jpg"
import "./Banner.scss"

const Banner = () => {
  return (
    <div className='banner-container'>
        {/* <img src={banner} alt="banner-image" loading='lazy'/> */}
        <h2 className='banner-text'>Discover meaningful Muslim baby names for your little one</h2>
    </div>
  )
}

export default Banner