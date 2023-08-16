import React from 'react';
import './Hero.css';
import Slide2 from '../../assets/Slide2.jpg';
function Hero() {
  return (
    <section className='hero-container'>
        <img className='hero-img' width={"100%"} height={"680px"} src={Slide2} alt=''/>
        <div className='hero-text'>
            <h1 className='hero-title'>Explore the New Fashion Here</h1>
            <p className='hero-para'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
             Etiam sed enim in leo facilisis aliquet.
            </p>
            <button className='banner-button'>Shop Now</button>
        </div>
    </section>
  )
}

export default Hero