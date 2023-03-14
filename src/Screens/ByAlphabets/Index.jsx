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
      <div className='section-title-main heading-by-abc'>
        <h2 className='' >BOYS NAMES STARTING WITH {`"${id}"`} 
        </h2>
        <h3> <span>کے ساتھ شروع ہونے والے نام </span> {"F"}</h3>
        
            </div>
            <div className='d-flex mt-3 mb-3'>
            <span> 
        <Link to="/" class="btn btn-primary">BACK</Link></span></div>
        <div></div>
        <TrendingCard cardClass="d-0 m-0" marginZero="m-0"/>
    </div>
  )
}

export default ByAlphabets