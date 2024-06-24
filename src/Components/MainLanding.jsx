import React from 'react'
import  './MainLanding.css';
import image from '../images/shoes.png';
import image1 from '../images/flipkart.png';
import image2 from '../images/amazon.png';


const MainLanding = () => {
  return (
    <div className='main-page'>
        <div className="main-page-left">
            <h1 className='heading'>YOUR FEET DESERVE THE BEST</h1>
            <p className='content'>YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.</p>
            <div className='btn'>
                <button className='btn1'>Shop Now</button>
                <button className='btn2'>Category</button>
            </div>
            <h6>Also Available On</h6>
            <div className="social-media">
                <span><img src={image1} alt="" /></span><span><img src={image2} alt="" /></span>
                
            </div>
        </div>
        <div className="main-page-right">
            <img src={image} className='shoes' alt="" />
        </div>
    </div>
    
  )
}

export default MainLanding
