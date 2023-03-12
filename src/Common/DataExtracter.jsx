import React, { useState, useEffect } from 'react';

function ExtractData() {
    const [names, setNames] = useState([]);
  
    useEffect(() => {
      fetchData();
    }, []);
  
    async function fetchData() {
      const response = await fetch('https://www.urdupoint.com/names/boys/a.html');
      const html = await response.text();
  
      // Use Cheerio to extract data from the HTML
      const cheerio = require('cheerio');
      const $ = cheerio.load(html);
  
      // Create an array to hold the extracted data
      const extractedNames = [];
  
      // Loop through each name row and extract the name and meaning
      $('tr').each((i, el) => {
        const name = $(el).find('a.color_boy').text().trim();
        const urduName = $(el).find('a.urdu').text().trim();
        const meaning = $(el).find('td.mean').text().trim();
    
        // Do something with name, urduName, and meaning
        extractedNames.push({ name, urduName, meaning });
      });

  
        // Add the extracted data to the array
        
      
  
      // Set the state with the extracted data
      setNames(extractedNames);
    }
  console.log(names)
    return (
      <div>
        <h1>Names:</h1>
        <ul>
          {names.map((name, i) => (
            <li key={i}>
              {name.name} - {name.meaning}
            </li>
          ))}
        </ul>
      </div>
    );
  }

export default ExtractData;
