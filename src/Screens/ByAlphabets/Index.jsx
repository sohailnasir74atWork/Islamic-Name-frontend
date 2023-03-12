import React from 'react'
import TrendingCard from '../Home/Cards/TrendingCard'
import "./ByAlphabets.scss"
const ByAlphabets = () => {
  return (
    <div className='container'>
        <h2 className='section-title-main heading-by-abc' >BOYS NAMES STARTING WITH "A"</h2>
        <div></div>
        <TrendingCard cardClass="d-0"/>
    </div>
  )
}

export default ByAlphabets