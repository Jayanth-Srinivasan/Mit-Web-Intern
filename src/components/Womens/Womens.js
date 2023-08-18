import React from 'react';
import '../Mens/Mens.css';
import Shirt from '../../assets/Shirt.jpg'

function Womens() {
  return (
    <section className='shop-section'>
        <div className='section-desc'>
            <h1 className='section-title'>Womens</h1>
            <p className='section-para'>Get the latest collection of Women's Fashion</p>
        </div>
        <div className='cards-container'>
            <div className='cards-box'>
                <div className='card'>
                    <img className='card-img' src={Shirt} alt=''/>
                    <div className='card-content'>
                        <span className='card-size'>Size: M</span>
                        <h3 className='card-title'>Casual Polo</h3>
                        <p className='card-price'>₹ 1499.00</p>
                        <div className='card-button-box'>
                            <button className='card-button'>Add to Cart</button>
                        </div>
                    </div>
                </div>
                <div className='card'>
                    <img className='card-img' src={Shirt} alt=''/>
                    <div className='card-content'>
                        <span className='card-size'>Size: M</span>
                        <h3 className='card-title'>Casual Polo</h3>
                        <p className='card-price'>₹ 1499.00</p>
                        <div className='card-button-box'>
                            <button className='card-button'>Add to Cart</button>
                        </div>
                    </div>
                </div>
                <div className='card'>
                    <img className='card-img' src={Shirt} alt=''/>
                    <div className='card-content'>
                        <span className='card-size'>Size: M</span>
                        <h3 className='card-title'>Casual Polo</h3>
                        <p className='card-price'>₹ 1499.00</p>
                        <div className='card-button-box'>
                            <button className='card-button'>Add to Cart</button>
                        </div>
                    </div>
                </div>
                <div className='card'>
                    <img className='card-img' src={Shirt} alt=''/>
                    <div className='card-content'>
                        <span className='card-size'>Size: M</span>
                        <h3 className='card-title'>Casual Polo</h3>
                        <p className='card-price'>₹ 1499.00</p>
                        <div className='card-button-box'>
                            <button className='card-button'>Add to Cart</button>
                        </div>
                    </div>
                </div>
                <div className='card'>
                    <img className='card-img' src={Shirt} alt=''/>
                    <div className='card-content'>
                        <span className='card-size'>Size: M</span>
                        <h3 className='card-title'>Casual Polo</h3>
                        <p className='card-price'>₹ 1499.00</p>
                        <div className='card-button-box'>
                            <button className='card-button'>Add to Cart</button>
                        </div>
                    </div>
                </div>
                <div className='card'>
                    <img className='card-img' src={Shirt} alt=''/>
                    <div className='card-content'>
                        <span className='card-size'>Size: M</span>
                        <h3 className='card-title'>Casual Polo</h3>
                        <p className='card-price'>₹ 1499.00</p>
                        <div className='card-button-box'>
                            <button className='card-button'>Add to Cart</button>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    </section>
  )
}

export default Womens