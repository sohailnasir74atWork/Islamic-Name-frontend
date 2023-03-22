import React, { useState, useEffect } from 'react';
import axios from 'axios';
const TranslateObject = ({ data }) => {
  const [urdu, setUrdu] = useState("");
  const [translatedData, setTranslatedData] = useState([]);

  const [loading, setLoading] = useState(true)
  useEffect(() => {
    const translateData = async () => {
        try {
            const translations = await Promise.all(
              data.map(async (obj) => {
                const response = await axios.post(
                  'https://translation.googleapis.com/language/translate/v2?key=AIzaSyCpdG63RaI9kv-8eIdhKhUHW_f7zeXxzQE',
                  {
                    q: obj.name,
                    target: 'ur',
                    key: 'YOUR_API_KEY',
                  }
                );
                const urduName = response.data.data.translations[0].translatedText;
                return { ...obj, urduName };
              })
            );
            setTranslatedData(translations);
            setLoading(false);
          } catch (error) {
            console.log(error);
            setTranslatedData([]);
          }
        };
    
        translateData();
      }, [data]);
      console.log(translatedData)
  return (
    <div>
      {loading && (<div class="d-flex justify-content-center tac" style={{minHeight:"50px"}}>
  <div class="spinner-border" role="status">
    <span class="sr-only">Loading...</span>
  </div>
</div>)}
      {!loading  && <div className='urdu-cont d-flex  tac' style={{minHeight:"50px", background:"var(--color-five)", color:"white"}}>{urdu}</div>}
    </div>
  );
};

export default TranslateObject;
