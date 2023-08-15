import React from 'react';
import "./Home.css"
import Header from './Header';
import CarouselHome from './CarouselHome';


function Home({onSignOut,user}) {
  return (
    <>
    <Header user={user} onSignOut={onSignOut} />
    <CarouselHome/>
    <div className='banner-container'>

      <div className='banner'>
          <h1 className='shop-text'>Shop Now!</h1>
          <h2 className='offer-text'>Get Upto 80% Off</h2>
          <button className='banner-button'>Shop Now</button>
      </div>
    </div>
    <footer>
      this is footer
    </footer>
    </>
  )
}

export default Home