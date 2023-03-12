import React, { useState } from 'react'
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

const TrendingCard = () => {
  const [like, setLike] = useState(0)
  const handleLikeClick = () => {
    setLike(like === 0 ? 1 : 0)
  }
  return (
    <div className='trending-card'>
      <div>
        <div className='d-flex'>
          <th>
            NAMES
          </th>
          <th>
            GENDER
          </th>
          <th>
            MEANINGS
          </th>
          <th className='urdu-cont'>
            معنی
          </th>
          <th className='support-cont'>
            SUPPORT
            <i class="fa-regular fa-heart fa-solid p-3 heart-w"></i>
          </th>
        </div>
        {Data.map(item => {
          return (<div className='d-flex line-color'>
            <td>
              {item.name}
            </td>
            <td>
              {item.gender}
            </td>
            <td>
              {item.meaning}
            </td>
            <td className='urdu-cont'>
              {item.urdu}                   
            </td><td className='urdu-cont'>
              <span className='span-heart'>1650 People liked</span>
              <i 
              className={`fa-regular fa-heart${like === 1 ? ' fa-solid' : ''} p-3 heart`}
              onClick={handleLikeClick}
              ></i>
            </td>
          </div>)
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