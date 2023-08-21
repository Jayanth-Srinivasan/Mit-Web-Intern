import React from 'react'
import './Cart.css';
import Slide1 from '../../assets/Slide1.jpg'

function Cart() {
  return (
    <section>
        <div className='cart-container'>
            <div className='cart-box'>
                <div className='cart-header'>
                    <h1 className='cart-title'>Your Cart</h1>
                </div>
                <div className='cart-contents'>
                    <ul className='cart-list'>
                        <li className='cart-item'>
                            <img className='cart-img' src={Slide1} alt=''/>
                            <div>
                                <h3 className='item-title'>Shirt Name</h3>
                                <dl className='item-desc'>
                                    <div>
                                        <dt className='desc'>Size: </dt>
                                        <dd className='desc'>M</dd>
                                    </div>
                                    <div>
                                        <dt className='desc'>Color: </dt>
                                        <dd className='desc'>White</dd>
                                    </div>
                                </dl>
                            </div>
                            <div className='item-quant'>
                                <input type='number' min={'1'} value={1} className='item-input'/> 
                                <div>
                                    <svg 
                                    xmlns="http://www.w3.org/2000/svg" 
                                    fill="none" 
                                    viewBox="0 0 24 24" 
                                    stroke-width="1.5" 
                                    stroke="currentColor" 
                                    className="svg-item">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                                    </svg>

                                </div>
                            </div>
                        </li>
                        <li className='cart-item'>
                            <img className='cart-img' src={Slide1} alt=''/>
                            <div>
                                <h3 className='item-title'>Shirt Name</h3>
                                <dl className='item-desc'>
                                    <div>
                                        <dt className='desc'>Size: </dt>
                                        <dd className='desc'>M</dd>
                                    </div>
                                    <div>
                                        <dt className='desc'>Color: </dt>
                                        <dd className='desc'>White</dd>
                                    </div>
                                </dl>
                            </div>
                            <div className='item-quant'>
                                <input type='number' min={'1'} value={1} className='item-input'/> 
                                <div>
                                    <svg 
                                    xmlns="http://www.w3.org/2000/svg" 
                                    fill="none" 
                                    viewBox="0 0 24 24" 
                                    stroke-width="1.5" 
                                    stroke="currentColor" 
                                    className="svg-item">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                                    </svg>

                                </div>
                            </div>
                        </li>
                    </ul>
                    <div className='price-box'>
                        <h3 className='total'>Total: $0.00</h3>
                        <a href='/ThankYou'>
                        <button className='checkout-button'>Checkout</button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Cart