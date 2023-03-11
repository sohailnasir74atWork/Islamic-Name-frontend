import React from 'react'
import "../Style/TrendingCard.scss"

const Data = [
    {
      name: "Sohail",
      meaning: "A shining star",
      urdu: "چمکتا ستارہ"
    },
    {
      name: "Fatima",
      meaning: "One who abstains",
      urdu: "ایک جو باز رہتی ہے"
    },
    {
      name: "Hamza",
      meaning: "Lion",
      urdu: "شیر"
    },
    {
      name: "Zainab",
      meaning: "Fragrant flower",
      urdu: "خوشبو دار پھول"
    },
    {
      name: "Imran",
      meaning: "Prosperity",
      urdu: "ترقی"
    },
    {
      name: "Ayesha",
      meaning: "Living, prosperous",
      urdu: "زندہ، خوشحال"
    },
    {
      name: "Zainab",
      meaning: "Fragrant flower",
      urdu: "خوشبو دار پھول"
    },
    {
      name: "Imran",
      meaning: "Prosperity",
      urdu: "ترقی"
    },
    {
      name: "Ayesha",
      meaning: "Living, prosperous",
      urdu: "زندہ، خوشحال"
    }
  ]
  

const TrendingCard = () => {
    return (
        <div className='trending-card'>
           
            <div>
                <div className='d-flex'>
                <th>
                   
                        NAMES
                  
                </th>
                <th>
                   
                        MEANINGS
                   
                </th>
                <th className='urdu-cont'>
                   
                معنی
                   
                </th>
                <th className='support-cont'>
                   
                Support
                <i class="fa-regular fa-heart fa-solid p-3 heart"></i>
                   
                </th>
                </div>
                
                
                    {Data.map(item=>
                    {return (<div className='d-flex line-color'>
                     <td>
                        {item.name}
                    </td>
                    <td>
                       {item.meaning}
                    </td>
                    <td className='urdu-cont'>
{item.urdu}                    </td><td className='urdu-cont'>
  <span className='span-heart'>1650 People liked</span>
<i class="fa-regular fa-heart fa-solid p-3 heart"></i>
</td>
</div>)}
                    )
                   }
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