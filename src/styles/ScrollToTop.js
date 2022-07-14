import React, {useState} from 'react';
import {FaAngleUp} from 'react-icons/fa';
import Button from 'react-bootstrap/Button';
  
const ScrollButton = () =>{
  
  const [visible, setVisible] = useState(false)
  
  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled >10){
      setVisible(true)
    } 
    else if (scrolled <= 30){
      setVisible(false)
    }
  };
  
  const scrollToTop = () =>{
    window.scrollTo({
      top: 0, 
      behavior: 'smooth'
      /* you can also use 'auto' behaviour
         in place of 'smooth' */
    });
  };
  
  window.addEventListener('scroll', toggleVisible);
  
  return (
    <Button >
     <FaAngleUp onClick={scrollToTop} 
     style={{display: visible ? 'inline':'none' }}/>
    </Button>
  );
}
  
export default ScrollButton;