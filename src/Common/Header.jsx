import React from 'react'
import "./header.scss"
import logo from "../images/logo.svg"
const Header = () => {
  return (
    <div className='header-container'>
      <div className='flex-box'>
        <div className='logo-container'>
          <img src={logo} alt="logo" /></div>
        <div className='container'>
          <ul>
            <li>
              99 Names of Allah
            </li>
            <li>
              Tending Name
            </li>
            <li>
              Boyes Names
            </li>
            <li>
              Grils Name
            </li>
            <li>
              Name from Quran
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Header