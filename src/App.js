import './App.scss';
import basket from './images/BASKET.svg';
import logo from './images/LOGO.svg'

function App() {
  return (
    <div>
      <header className='header'>
        <img id='logo'src={logo} alt='Logo'></img>
        <a className='header-home' href="#">Home</a>
        <a className='header-products' href="#">Products</a>
        <a  href="#"><img className='header-basket-icon' src={basket} alt='Basket'/></a>
      </header>
      <div></div>
      <footer></footer>
    </div>
  );
}

export default App;
