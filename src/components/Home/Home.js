import React from 'react';
import "./Home.css"

function Home({onSignOut,user}) {
  return (
    <header className='navBar'>
        <h1 className='logo-text'>Mit-Kart</h1>
        <div className='profile'>
        <div>{user.name}</div>
        <div onClick={onSignOut} className='sign-out'>Sign Out</div>
        </div>
    </header>
  )
}

export default Home