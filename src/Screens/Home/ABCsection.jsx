import React from 'react'
import SearchCardABC from './Cards/SearchCardABC'
import "./Style/ABCsection.scss"

const ABCsection = () => {
  return (
    <div className='container'>
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