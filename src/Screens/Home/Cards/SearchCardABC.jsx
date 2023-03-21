import React from 'react'
import { Link } from 'react-router-dom';

import "../Style/SearchbyABCcard.scss"
const SearchCardABC = ({gender}) => {
  const alphabets = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

  return (
    <div className='ABC-card-container col flex-center'>
      <div class="card text-white bg-secondary mb-3" style={{maxWidth: "50rem"}}>
  <div class="card-header"> {`${gender} NAMES BY ALPHABETS`} </div>
  <div class="card-body">
  <ul className='ABC-container'>
  {alphabets.map(alphabet => (
       
       <Link to={`${gender === "BOYS" ? `boys/alphabet/${alphabet}` : `girls/alphabet/${alphabet}`}`}>
  <li key={alphabet}>{alphabet}</li>
</Link>

        
      ))}
</ul>
  </div>
</div>
    </div>
  )
}

export default SearchCardABC