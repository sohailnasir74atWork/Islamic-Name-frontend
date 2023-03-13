import React, { useEffect, useRef } from 'react';


const SmoothScroll = ({ id, children }) => {
    const elementRef = useRef(null);
  
    useEffect(() => {
      const handleClick = () => {
        const element = document.getElementById(id);
        element.scrollIntoView({ behavior: 'smooth' });
      };
  
      elementRef.current.addEventListener('click', handleClick);
  
      return () => {
        elementRef.current.removeEventListener('click', handleClick);
      };
    }, [id]);
  
    return (
      <a href={`#${id}`} ref={elementRef}>
        {children}
      </a>
    );
  };
  
  export default SmoothScroll