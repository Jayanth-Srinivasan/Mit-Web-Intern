import React from 'react';
import Slide1 from '../../assets/Slide1.jpg';
import Slide2 from '../../assets/Slide2.jpg';
import Slide3 from '../../assets/Slide3.jpg';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

function CarouselHome() {
  return (
    <Carousel>
                <div>
                    <img src={Slide1} alt=''/>
                    <p className="legend">Sale 80% off</p>
                </div>
                <div>
                    <img src={Slide2}  alt=''/>
                    <p className="legend">Grab your offer Now</p>
                </div>
                <div>
                    <img src={Slide3} alt=''/>
                    <p className="legend">Shop Now</p>
                </div>
      </Carousel>
  )
}

export default CarouselHome