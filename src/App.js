import './App.scss';
import basket from './images/BASKET.svg';
import logo from './images/LOGO.svg';
import mobileMenu from './images/MENU.svg';
import React, { useState, useEffect } from 'react';
import Card from './components/Card';
import footerIcon from './images/FOOTER_ICON.svg'

function App() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 360);
  const [isTextVisible, setTextVisible] = useState(false);


  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 360);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleButtonClick = () => {
    setTextVisible(!isTextVisible);
  };

  const cardData = [
    { header: 'Move the borders of reality!', text: "Go on a space adventure", className: 'card__item card__item--1' },
    { header: 'Space is not just stars and planets', text: 'it is a majestic journey to', className: 'card__item card__item--2' },
    { header: 'For those who dream of stars', text: 'Our offer: make your dream come true', className: 'card__item card__item--3' },
    { header: 'Fulfill your fantastic dreams', text: 'Space has never been so close', className: 'card__item card__item--4' },
  ];

  return (
    <div className="app">
      <header className="banner">
        <div className="header">
          <img className="header__logo" src={logo} alt="Logo" />
          <a className="header__home" href="#">Home</a>
          <a className="header__products" href="#">Products</a>
          <a className="header__basket" href="#">
            <svg className="header__basket-icon" width="24" height="21" viewBox="0 0 24 21" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="basketGradient" x1="0%" y1="0%" x2="100%" y2="100%" gradientUnits="userSpaceOnUse">
                  <stop offset="26.02%" stop-color="rgba(235, 255, 0, 0.6)" />
                  <stop offset="90.57%" stop-color="rgba(255, 112, 217, 0.6)" />
                </linearGradient>
              </defs>
              <path className="basket-icon-path" fillRule="evenodd" clipRule="evenodd" d="M9.23358 18.5641C9.23358 17.5679 8.41124 16.7682 7.38685 16.7682C6.36248 16.7682 5.54012 17.5679 5.54012 18.5641C5.54012 19.5603 6.36248 20.36 7.38685 20.36C8.41124 20.36 9.23358 19.5603 9.23358 18.5641ZM22.1607 18.5641C22.1607 17.5679 21.3383 16.7682 20.3139 16.7682C19.2895 16.7682 18.4672 17.5679 18.4672 18.5641C18.4672 19.5603 19.2895 20.36 20.3139 20.36C21.3383 20.36 22.1607 19.5603 22.1607 18.5641ZM24.0074 3.30052C24.0074 2.80935 23.589 2.40269 23.084 2.40269H5.75655C5.61231 1.72922 5.59781 0.606934 4.6168 0.606934H0.923317C0.418371 0.606934 0 1.01381 0 1.50463C0 1.99579 0.418371 2.40269 0.923317 2.40269H3.86656L6.42024 13.9487C6.21824 14.3552 5.54012 15.4357 5.54012 15.8705C5.54012 16.3617 5.95851 16.7682 6.46353 16.7682H21.2373C21.7423 16.7682 22.1607 16.3617 22.1607 15.8705C22.1607 15.3797 21.7423 14.9727 21.2373 14.9727H7.96399C8.10823 14.692 8.31026 14.3974 8.31026 14.075C8.31026 13.7521 8.18035 13.4017 8.12266 13.0927L23.185 11.3814C23.6611 11.3251 24.0074 10.9323 24.0074 10.4832V3.30052Z" fill="white"/>
            </svg>
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
        <Card key={index} header={card.header} text={card.text} className={card.className} />
      ))}
      <div className="content__description">
        <h5 className="content__description-title">Embark on a space journey</h5>
        <p className="content__description-text">Traveling into space is one of the most exciting and unforgettable adventures that can change your life forever. And if you have ever dreamed of exploring stars, planets and galaxies, then our company is ready to help you realize this dream. We offer a unique experience that will allow you to go on a space journey and see all the secrets of the universe. We guarantee that every moment in space will be filled with incredible impressions, excitement and new discoveries. Our team of professionals takes care of your safety and comfort so that you can fully enjoy your adventure in space. We offer various options for space excursions.</p>
        {!isTextVisible && (
          <button className="content__description-button" onClick={handleButtonClick}>Read more</button>
        )}
        <p className={`content__description-additional ${isTextVisible ? 'visible' : ''}`}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
      </div>
    </div>
      <footer className="footer">
        <img src={footerIcon} alt='Rocket'/>
        </footer>
    </div>
  );
}

export default App;
