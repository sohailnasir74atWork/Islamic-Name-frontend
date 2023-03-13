import React, { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import TrendingCard from '../Home/Cards/TrendingCard'
import "./ByAlphabets.scss"
const ByAlphabets = () => {

    const {id} = useParams()


    const scrollToTop = () => {
        window.scrollTo(0, 0);
      };
      
      useEffect(() => {
        scrollToTop();
      }, []);
      


  return (
    <div className='container'>
        <h2 className='section-title-main heading-by-abc' >BOYS NAMES STARTING WITH {`"${id}"`} 
        <span className='ml-6'> 
        <Link to="/" class="btn btn-primary pl-3">BACK</Link></span></h2>
       
        <div></div>
        <TrendingCard cardClass="d-0"/>
    </div>
  )
}

export default ByAlphabets