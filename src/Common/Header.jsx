import React from 'react'
import "./header.scss"
import logo from "../images/logo.svg"
const Header = () => {
  return (
    <div className='header-container'>
      <div className='flex-box container'>
        <div className='logo-container'>
          <img src={logo} alt="logo" /></div>
        <div className='col mt-auto'>
          <ul className='row'>
            <li className='col'>
              99 Names of Allah
            </li>
            <li className='col'>
              Tending Name
            </li >
            <li className='col'> 
              Boyes Names
            </li>
            <li className='col'>
              Grils Name
            </li>
            <li className='col'>
              Name from Quran
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Header