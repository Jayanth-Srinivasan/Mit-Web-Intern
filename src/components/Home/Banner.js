import React from 'react';
import './Banner.css';

function Banner() {
  return (
    <div className='banner-container'>

      <div className='banner'>
          <h1 className='shop-text'>Shop Now!</h1>
          <h2 className='offer-text'>Get Upto 80% Off</h2>
          <button className='banner-button'>Shop Now</button>
      </div>
    </div>
  )
}

export default Banner