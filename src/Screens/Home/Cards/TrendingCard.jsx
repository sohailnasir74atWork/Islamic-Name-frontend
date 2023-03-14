import React, { useEffect, useState } from 'react'
import "../Style/TrendingCard.scss"

const Data = [
  {
    name: "Sohail",
    meaning: "A shining star",
    urdu: "چمکتا ستارہ",
    gender: "Boy"
  },
  {
    name: "Fatima",
    meaning: "One who abstains",
    urdu: "ایک جو باز رہتی ہے",
    gender: "Boy"
  },
  {
    name: "Hamza",
    meaning: "Lion",
    urdu: "شیر",
    gender: "Boy"
  },
  {
    name: "Zainab",
    meaning: "Fragrant flower",
    urdu: "خوشبو دار پھول",
    gender: "Girl"
  },
  {
    name: "Imran",
    meaning: "Prosperity",
    urdu: "ترقی",
    gender: "Boy"
  },
  {
    name: "Ayesha",
    meaning: "Living, prosperous",
    urdu: "زندہ، خوشحال",
    gender: "Gril"
  },
  {
    name: "Zainab",
    meaning: "Fragrant flower",
    urdu: "خوشبو دار پھول",
    gender: "Girl"
  },
  {
    name: "Imran",
    meaning: "Prosperity",
    urdu: "ترقی",
    gender: "Boy"
  },
  {
    name: "Ayesha",
    meaning: "Living, prosperous",
    urdu: "زندہ، خوشحال",
    gender: "Girl"
  }
]

const TrendingCard = ({ cardClass }) => {
  const [like, setLike] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedGender, setSelectedGender] = useState('GENDER');

  const handleLikeClick = () => {
    setLike(like === 0 ? 1 : 0);
  };

  const handleSelect = (gender) => {
    setSelectedGender((prevGender) => {
      console.log('prevGender:', prevGender);
      console.log('gender:', gender);
      return gender;
    });
    setIsOpen(false);
  };
  useEffect(() => {
    console.log(selectedGender);
  }, [selectedGender]);

  return (
    <div className='trending-card'>
      <div>
        <div className='d-flex'>
          <th>NAMES</th>
          <th className={`pl-0 ${cardClass}`}>
            <div className='gender-select'>
              <div
                className='gender-select-header'
                onClick={() => setIsOpen(!isOpen)}
                // onBlur={() => setIsOpen(false)}
                tabIndex='0'
              >
                {selectedGender}
                <i className='fa-solid fa-chevron-down p-2'></i>
              </div>
              {isOpen && (
                <div className='gender-select-options'>
                  <div onClick={() => handleSelect('BOYS')}>Boys</div>
                  <div onClick={() => handleSelect('GIRLS')}>Girls</div>

                </div>
              )}
            </div>
          </th>
          <th className='mobile-hide'>MEANINGS</th>
          <th className='urdu-cont'>معنی</th>
          <th className='support-cont'>
            <h3>SUPPORT</h3>
             <i class='fa-regular fa-heart fa-solid p-3 heart-w'></i>
          </th>
        </div>
        {Data.map((item) => {
          return (
            <div className='col line-color br-10'>
              <div className='d-flex mr-custom'>
              <td>{item.name}</td>
              <td className={`pl-0 ${cardClass}`}>{item.gender} 
              {/* <i className='fa-solid fa-chevron-down p-2 hide'></i> */}
              </td>
              <td className='mobile-hide'>{item.meaning}</td>
              <td className='urdu-cont'>{item.urdu}</td>
              <td className='urdu-cont mobile-hide'>
                <span className='span-heart'>1650 People liked</span>
                <i
                  className={`fa-regular fa-heart${like === 1 ? ' fa-solid' : ''} p-3 heart`}
                  onClick={handleLikeClick}
                ></i>
              </td>
              </div>
               <div className='hide'>
               <td> {item.meaning}</td>
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
            <ul class="pagination">
              <li class="page-item">
                <a class="page-link" href="#" aria-label="Previous">
                  <span aria-hidden="true">&laquo;</span>
                  <span class="sr-only">Previous</span>
                </a>
              </li>
              <li class="page-item"><a class="page-link" href="#">1</a></li>
              <li class="page-item"><a class="page-link" href="#">2</a></li>
              <li class="page-item"><a class="page-link" href="#">3</a></li>
              <li class="page-item">
                <a class="page-link" href="#" aria-label="Next">
                  <span aria-hidden="true">&raquo;</span>
                  <span class="sr-only">Next</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  )
}

export default TrendingCard