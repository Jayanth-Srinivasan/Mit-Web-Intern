import React from 'react';
import "./Home.css"

import Banner from './Banner';
import Hero from './Hero';
import BannerCollection from './BannerCollection';
import Footer from '../Footer/Footer';



function Home() {
  return (
    <>
    <Hero/>
    <Banner />
    <BannerCollection/>
    <Footer/>
    </>
  )
}

export default Home