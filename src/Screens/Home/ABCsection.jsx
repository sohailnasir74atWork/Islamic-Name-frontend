import React from 'react'
import SearchCardABC from './Cards/SearchCardABC'
import "./Style/ABCsection.scss"
const ABCsection = () => {
  return (
    <div  className="pt-6">
    <div className='container' data-aos="fade-up">
      <div className='section-title-main mb-3'>
      <h2  >SEARCH NAMES BY ALPHABETS</h2>
      <h3>حروف تہجی کے لحاظ سے نام تلاش کریں
</h3>
      </div>
        <div className='row'>
            <div className='col cards-container'>
              <div> <SearchCardABC gender="BOYS"/></div>
              <div> <SearchCardABC gender="GIRLS"/></div>
              </div>
         </div>
    </div>
    </div>
  )
}

export default ABCsection