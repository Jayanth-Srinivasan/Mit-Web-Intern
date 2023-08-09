import React from 'react';
import "./Home.css"

function Home() {
  return (
    <header className='navBar'>
        <h1 className='logo-text'>Mit-Kart</h1>
        <div className='profile'>
        <div>Name</div>
        <div>Sign Out</div>
        </div>
    </header>
  )
}

export default Home