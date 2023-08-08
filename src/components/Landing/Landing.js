import React from 'react';
import Hero from '../../assets/Hero.svg';
import './Landing.css';
import { useNavigate } from 'react-router-dom';

function Landing() {
  const navigate = useNavigate();
  return (
    <div className="hero">
      <div className='heroCard'>
        <div className='textBox'>
          <div className='box'>
            <h1 className='heading'>Everything You Need is Here</h1>
            <p className='desc'>Get started to Start Shopping blah blah blah</p>
            <button onClick={() => navigate('/home')} className='cta'>Get Started</button>
          </div>
        </div>
        <div className='imageBox'>
          <img src={Hero} alt='' width={500} height={500}/>
        </div>
      </div>
    </div>
  )
}

export default Landing