import React from 'react'
import SearchCardABC from './Cards/SearchCardABC'
import "./Style/ABCsection.scss"

const ABCsection = () => {
  return (
    <div className='container'>
      <h2 className='section-title-main'>SEARCH NAMES BY ALPHABETS</h2>
        <div className='row'>
            <div className='col cards-container'>
            <SearchCardABC/>
            <SearchCardABC/>
            </div>
         </div>
    </div>
  )
}

export default ABCsection