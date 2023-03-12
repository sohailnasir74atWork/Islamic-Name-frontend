import React from 'react'
import "./header.scss"
import logo from "../images/logo-1.svg"
const Header = () => {
  return (
    <div className='header-container'>
      <div className='flex-box container'>
        <div className='logo-container'>
          <img src={logo} alt="logo" /></div>
        <div className='col mt-auto'>
          <ul className='row'>
            <li className='col'>
              Allah's Names
            </li>
            <li className='col'>
              Tending Name
            </li >
            <li className='col'> 
              New Added
            </li>
            <li className='col'>
              Poluar Name
            </li>
            <li className='col'>
              Quranic Names
            </li>
            <li className='col'>
            <div class="form-check form-switch mt-auto d-flex justify-content-end">
          <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
          <span className='dark-mode'>Dark</span>
       </div>
            </li>
          </ul>
        </div>
       
      </div>
    </div>
  )
}

export default Header