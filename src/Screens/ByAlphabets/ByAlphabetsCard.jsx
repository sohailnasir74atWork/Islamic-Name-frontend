import React, { useEffect, useState } from 'react'
import Translate from '../../Common/Translat';
import "../Home/Style/TrendingCard.scss"

const ByAlphabetsCard = ({ cardClass, marginZero, data, totalPages, currentPage, onPageChange }) => {
  const [like, setLike] = useState(0);
  const [show, setShow] = useState(Array(data.length).fill(false));
  const [clickedIndex, setClickedIndex] = useState(null);



  const handleLikeClick = () => {
    setLike(like === 0 ? 1 : 0);
  };
  const handleUrduClick = (index) => {
    setShow((prevShow) => {
      const newShow = [...prevShow];
      // Toggle the clicked item
      newShow[index] = !prevShow[index];
      // Close all other items
      for (let i = 0; i < newShow.length; i++) {
        if (i !== index) {
          newShow[i] = false;
        }
      }
      return newShow;
    });
  };
  
  
  const pagesToShow = 3;
const range = Math.floor(pagesToShow / 2);
 
  return (
    <div className={`trending-card ${marginZero}`}>
      <div>
        <div className='d-flex'>
          <th className='col-1'>NAMES</th>
          <th className='urdu-cont col-1'>نام</th>
          <th className='urdu-cont col-3'>اردو معنی</th>
          <th className='mobile-hide col-5'>MEANINGS</th>
          
          <th className='support-cont col-2'>
            <h3>SUPPORT</h3>
            <i className='fa-regular fa-heart fa-solid p-3 heart-w'></i>
          </th>
        </div>
        {data.map((item, index) => {
          return (
            <div className='col line-color br-10'>
              <div className='d-flex mr-custom'>
                <td className='col-1'>{item.name}</td>
                
                <td className='urdu-cont col-1'>{item.urduName}</td>
                <td className='mobile-hide col-3 tac'><button className='btn btn-primary btn-cont' onClick={()=>handleUrduClick(index)}>Check Urdu Meaning</button></td>
                <td className='mobile-hide col-5'>{item.englishMeaning}</td>
                
                
                <td className='urdu-cont mobile-hide col-2'>
                  <span className='span-heart'>1650 People liked</span>
                  <i
                    className={`fa-regular fa-heart${like === 1 ? ' fa-solid' : ''} p-3 heart`}
                    onClick={handleLikeClick}
                  ></i>
                </td>
              </div>

              {show [index]&& <span> {<Translate text={item.englishMeaning}/>}</span>}
              <div className='hide'>
                <td>{item.meaning}</td>
                <td className='urdu-cont d-flex justify-content-right'>
                  <span className='span-heart-mobile'>1650 People liked</span>
                  <i
                    className={`fa-regular fa-heart${like === 1 ? ' fa-solid' : ''} p-1 heart`}
                    onClick={handleLikeClick}
                  ></i>
                </td>
              </div>
            </div>
          );
        })}
      <div className='pagination-container'>
  <nav aria-label="Page navigation example">
    <ul className="pagination">
      <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
        <a className="page-link" href="#" onClick={() => onPageChange(currentPage - 1)} aria-label="Previous">
          <span aria-hidden="true">&laquo;</span>
          <span className="sr-only">Previous</span>
        </a>
      </li>
      {[...Array(totalPages)].map((_, index) => {
        const pageNumber = index + 1;
        if (pageNumber === 1 || pageNumber === totalPages ||
            (pageNumber >= currentPage - range && pageNumber <= currentPage + range)) {
          return (
            <li key={index} className={`page-item ${pageNumber === currentPage ? 'active' : ''}`}>
              <a className="page-link" href="#" onClick={() => onPageChange(pageNumber)}>{pageNumber}</a>
            </li>
          );
        }
        if (pageNumber === currentPage - range - 1 || pageNumber === currentPage + range + 1) {
          return (
            <li key={index} className="page-item disabled">
              <a className="page-link" href="#">...</a>
            </li>
          );
        }
        return null;
      })}
      <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
        <a className="page-link" href="#" onClick={() => onPageChange(currentPage + 1)} aria-label="Next">
          <span aria-hidden="true">&raquo;</span>
          <span className="sr-only">Next</span>
        </a>
      </li>
      <li className="page-item">
        <span className="page-link">
          Page {currentPage} of {totalPages}
        </span>
      </li>
    </ul>
  </nav>
</div>

      </div>
    </div>
  );
}

export default ByAlphabetsCard
