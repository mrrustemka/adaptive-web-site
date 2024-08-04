import './App.scss';
import basket from './images/BASKET.svg';
import logo from './images/LOGO.svg'
import mobileMenu from './images/MENU.svg'
import React, { useState, useEffect } from 'react';

function App() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 360);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 360);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div>
      <header id="banner" >
        <div className='header'>
          <img id='logo'src={logo} alt='Logo'></img>
          <a className='header-home' href="#">Home</a>
          <a className='header-products' href="#">Products</a>
          <a className='header-basket' href="#">
            <img className='header-basket-icon' src={isMobile ? mobileMenu : basket} alt='Basket'/>
          </a>
        </div>
        <div className='banner-header'>
          <h1>Discover the vast expanses of <span>space</span></h1>
          <h2>Where the possibilities are <span>endless!</span></h2>
          <button>Learn more</button>
        </div>
      </header>
      <div>

      </div>
      <div></div>
      <footer></footer>
    </div>
  );
}

export default App;
