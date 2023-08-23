import React from 'react'
import './ThankYou.css'

function ThankYou() {
  return (
    <section className='thankyou-section'>
        <div className='thankyou-container'>
          <h1 className='thankyou-title'>Thank You for Shopping with Us!</h1>
          <p className='thankyou-para'>You will receive your package soon!</p>
          <a href='/'>
           <button className='thankyou-button'>Continue Shopping</button>
           </a>
        </div>
    </section>
  )
}

export default ThankYou