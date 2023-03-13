import React from 'react'
import "./header.scss"
import logo from "../images/logo-1.svg"
import { Link } from 'react-router-dom'
const Header = () => {
  const handleClick = () => {
    const element = document.getElementById("trending");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className='header-container'>
      <div className='flex-box container'>
        <div className='logo-container'>
          <Link to="/">
          <img src={logo} alt="logo" /></Link></div>
        <div className='col mt-auto'>
          <ul className='row'>
            <li className='col' onClick={handleClick}>
              Allah's Names
            </li>
            <li className='col' onClick={handleClick}>
              Tending Name
            </li >
            <li className='col' onClick={handleClick}> 
              New Added
            </li>
            <li className='col' onClick={handleClick}>
              Poluar Name
            </li>
            <li className='col' onClick={handleClick}>
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