import React from 'react';
import './BannerCollection.css';
import Slide3 from '../../assets/Slide3.jpg';
import Slide2 from '../../assets/Slide2.jpg';
import Slide1 from '../../assets/Slide1.jpg';

function BannerCollection() {
  return (
    <section>
        <div>
            <div className='banner-text'>
                <h2 className='banner-title'>New Collections</h2>
                <p className='banner-para'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.Etiam sed enim in leo facilisis aliquet.</p>
            </div>
            <ul className='banner-grid'>
                <li className='banner-item'>
                    <img className='banner-img' src={Slide3} alt='' width={'100%'}/>
                    <div className='banner-content'>
                        <h3 className='content-title'>Shirts</h3>
                        <button className='content-button'>Shop Now</button>
                    </div>
                </li>
                <li className='banner-item2'>
                    <img className='banner-img' src={Slide2} alt='' width={'100%'}/>
                    <div className='banner-content'>
                        <h3 className='content-title'>Casuals</h3>
                        <button className='content-button'>Shop Now</button>
                    </div>
                </li>
                <li className='banner-item3'>
                    <img className='banner-img' src={Slide1} alt='' width={'100%'}/>
                    <div className='banner-content'>
                        <h3 className='content-title'>Suits</h3>
                        <button className='content-button'>Shop Now</button>
                    </div>
                </li>
                
            </ul>
        </div>
    </section>
  )
}

export default BannerCollection