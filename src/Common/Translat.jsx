import React, { useState, useEffect } from 'react';
import axios from 'axios';
const Translate = ({ text }) => {
  const [urdu, setUrdu] = useState("");
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    const translateText = async (text) => {
      try {
        const response = await axios.post(
          'https://translation.googleapis.com/language/translate/v2?key=AIzaSyCpdG63RaI9kv-8eIdhKhUHW_f7zeXxzQE',
          {
            q: text,
            target: 'ur',
          }
        );
        setUrdu(response.data.data.translations[0].translatedText);
        setLoading(false)
      } catch (error) {
        console.log(error);
        setUrdu('');
      }
    };
    translateText(text)
  }, [text]);

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

export default Translate;
