import React from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

const Header = () => {
  return(
    <header className='header'>
      <div className="container">
        <div className="header__wrapper">
          <Link to="/" className='header__logo'>Logo-go</Link>
          <nav className='header__nav'>
            <ul className='nav__list'>
              <li className='nav__item'><Link to="/"  className='nav__link'>Главная</Link></li>
              <li className='nav__item'><Link to="/posts"  className='nav__link'>Блог</Link></li>
              <li className='nav__item'><Link to="/about"  className='nav__link'>О нас</Link></li>
              <li className='nav__item'><Link to="/contact"  className='nav__link'>Контакты</Link></li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header;