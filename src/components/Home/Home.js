import React from 'react';
import "./Home.css"

import Banner from './Banner';
import Hero from './Hero';
import BannerCollection from './BannerCollection';



function Home() {
  return (
    <>
    <Hero/>
    <Banner />
    <BannerCollection/>
    </>
  )
}

export default Home