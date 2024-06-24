import React from 'react';
import image from '../images/nike.png'
import './NavBar.css';

const navbar = () => {
  return (
    <div className='nav-section'>
      
        <div className='logo'>
          <img src={image} alt="" />
        </div>
        <div className='lists'>
          <ul>MENU</ul>
          <ul>LOCATION</ul>
          <ul>ABOUT</ul>
          <ul>CONTACT</ul>
        </div>
        <div className='login'> 
            <button type='button' className='buttons'>Login</button>
        </div>
        
   
    </div>
  )
}

export default navbar
