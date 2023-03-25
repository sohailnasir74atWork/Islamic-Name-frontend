import React, { useEffect, useState } from 'react'
import "./header.scss"
import logo from "../images/logo-1.svg"
import { Link } from 'react-router-dom'
import { useLocation, useNavigate } from 'react-router-dom';
import TrendingSection from '../Screens/Home/TrendingSection';
import { useGlobalState } from '../GlobelState';


const Header = () => {
  const { activeBtnIndex, setActiveBtnIndex } = useGlobalState();

  const location = useLocation();
  // const [showIcon, setShowIcon] = useState(false); // new state variable
  // useEffect(() => {
  //   function handleScroll() {
  //     const mySection = document.getElementById('bars-stop');
  //     if (window.scrollY >= mySection.offsetTop) {
  //       setShowIcon(false);
  //     } else {
  //       setShowIcon(true);
  //     }
  //   }
  //   window.addEventListener('scroll', handleScroll);
  //   return () => window.removeEventListener('scroll', handleScroll);
  // }, [document.getElementById('bars-stop')]);
  useEffect(() => {
    if (location.pathname === "/#trending" ) {
      const trendingSection = document.getElementById("trending");
      if (trendingSection) {
        trendingSection.scrollIntoView();
      }
    }
  }, [location.pathname]);


  function handleClick(e) {
    
    const trendingSection = document.getElementById('trending');
    console.log(trendingSection)
    if (trendingSection) {
      trendingSection.scrollIntoView();
    }
    setActiveBtnIndex(e)
  }
 
  return (
    <div className='header-container'>
      <div className='flex-box container header-logo-mobile '>
        <div className='logo-container'>
          <Link to="/">
          <img src={logo} alt="logo" /></Link></div>
          {/* <div className='sticky-button'><i class="fa-solid fa-bars"></i></div> */}
        <div className='col mt-auto mobile-header'>
          <ul className='row'>
            <li className='col' >
              <Link to="/#trending" onClick={ ()=>handleClick(0)}>
              Trending Names</Link>
            </li>
            <li className='col'>
            <Link to="/#trending" onClick={ ()=>handleClick(2)}>
              Quranic Names</Link>
            </li >
            <li className='col'> 
            <Link to="/#trending" onClick={()=>handleClick(4)}>
            Allah's Names</Link>
          </li>
            <li className='col' >
            <Link to="/#trending" onClick={()=>handleClick(5)}>
            Muhammad's Names</Link>
            </li>
           <li className='col col-md-2'>
            <div className="form-check form-switch mt-auto d-flex justify-content-end">
              <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
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