import React from 'react';
import "./Home.css"
import Header from './Header';
import Banner from './Banner';
import Hero from './Hero';
import BannerCollection from './BannerCollection';



function Home({onSignOut,user}) {
  return (
    <>
    <Header user={user} onSignOut={onSignOut} />
    <Hero/>
    <Banner />
    <BannerCollection/>
    <footer>
      this is footer
    </footer>
    </>
  )
}

export default Home