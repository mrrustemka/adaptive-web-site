import './App.scss';
import basket from './images/BASKET.svg';
import logo from './images/LOGO.svg';
import mobileMenu from './images/MENU.svg';
import React, { useState, useEffect } from 'react';
import Card from './components/Card';
import footerIcon from './images/FOOTER_ICON.svg'

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

  const cardData = [
    { header: 'Move the borders of reality!', textDesktop: "Go on a space adventure - it's possible with us!", textMobile: "Go on a space adventure", className: 'card__item card__item--1' },
    { header: 'Space is not just stars and planets', textDesktop: 'it is a majestic journey to', textMobile: "it is a majestic journey to", className: 'card__item card__item--2' },
    { header: 'For those who dream of stars', textDesktop: 'Our offer: make your dream come true', textMobile: "Our offer: make your dream come true", className: 'card__item card__item--3' },
    { header: 'Fulfill your fantastic dreams', textDesktop: 'Space has never been so close', textMobile: "Space has never been so close", className: 'card__item card__item--4' },
  ];

  return (
    <div className="app">
      <header className="banner">
        <div className="header">
          <img className="header__logo" src={logo} alt="Logo" />
          <a className="header__home" href="#">Home</a>
          <a className="header__products" href="#">Products</a>
          <a className="header__basket" href="#">
            <img className="header__basket-icon" src={isMobile ? mobileMenu : basket} alt="Basket" />
          </a>
        </div>
        <div className="banner__header">
          <h1>Discover the vast expanses of <span>space</span></h1>
          <h3>Where the possibilities are <span>endless!</span></h3>
          <button className="banner__button">Learn more</button>
        </div>
      </header>
      <div className="content">
        <h3 className="content__title">Offers</h3>
        {cardData.map((card, index) => (
          <Card key={index} header={card.header} text={isMobile ? card.textDesktop : card.textMobile} className={card.className} />
        ))}
        <div className="content__description">
          <h5 className="content__description-title">Embark on a space journey</h5>
          <p className="content__description-text">Traveling into space is one of the most exciting and unforgettable adventures that can change your life forever. And if you have ever dreamed of exploring stars, planets and galaxies, then our company is ready to help you realize this dream. We offer a unique experience that will allow you to go on a space journey and see all the secrets of the universe. We guarantee that every moment in space will be filled with incredible impressions, excitement and new discoveries. Our team of professionals takes care of your safety and comfort so that you can fully enjoy your adventure in space. We offer various options for space excursions.</p>
          <button className="content__description-button">Read more</button>
        </div>
      </div>
      <footer className="footer">
        <img src={footerIcon} alt='Rocket'/>
        </footer>
    </div>
  );
}

export default App;
