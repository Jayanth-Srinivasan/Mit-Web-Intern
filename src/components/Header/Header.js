import React from 'react';
import './Header.css';

function Header({onSignOut,user}) {
  return (
    <header className='navBar'>
      <div className='container'>
        <div className='logo'>
          <h1 className='logo-text'>Mit-Kart</h1>
        </div>
        <div>
          <nav>
            <ul className='navItems'>
              <li>
                <a href='/mens' className='menuItems'>Mens</a>
              </li>
              <li>
                <a href='/womens' className='menuItems'>Womens</a>
              </li>
              <li>
                <a href='/kids' className='menuItems'>Kids</a>
              </li>
              <li>
                <a href='/seller' className='menuItems'>Seller</a>
              </li>
            </ul>
          </nav>
        </div>
        <div className='profile'>
          <a href='/cart'>
            <svg
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M5.79166 2H1V4H4.2184L6.9872 16.6776H7V17H20V16.7519L22.1932 7.09095L22.5308 6H6.6552L6.08485 3.38852L5.79166 2ZM19.9869 8H7.092L8.62081 15H18.3978L19.9869 8Z"
              fill="currentColor"
            />
            <path
              d="M10 22C11.1046 22 12 21.1046 12 20C12 18.8954 11.1046 18 10 18C8.89543 18 8 18.8954 8 20C8 21.1046 8.89543 22 10 22Z"
              fill="currentColor"
            />
            <path
              d="M19 20C19 21.1046 18.1046 22 17 22C15.8954 22 15 21.1046 15 20C15 18.8954 15.8954 18 17 18C18.1046 18 19 18.8954 19 20Z"
              fill="currentColor"
            />
          </svg>
          </a>
          <img src={user?.photo} alt=''className='pic' width={50} height={50} referrerPolicy="no-referrer" />
          <button onClick={onSignOut} className='button'>Sign Out</button>
        </div>
      </div>
    </header>
  )
}

export default Header