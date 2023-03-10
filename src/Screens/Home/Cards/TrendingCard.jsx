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
    }
  ]
  

const TrendingCard = () => {
    return (
        <div className='trending-card'>
            <div className='section-title'>Boys Names</div>
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
                </div>
                
                
                    {Data.map(item=>
                    {return (<div className='d-flex'>
                     <td>
                        {item.name}
                    </td>
                    <td>
                       {item.meaning}
                    </td>
                    <td className='urdu-cont'>
{item.urdu}                    </td></div>)}
                    )
                   }
                
            </div>
        </div>
    )
}

export default TrendingCard