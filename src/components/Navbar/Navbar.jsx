import React, { useState } from 'react';

import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineRestaurantMenu } from 'react-icons/md';

import { images } from '../../constants';

import './Navbar.css';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <nav className='app__navbar'>
      <div className='app__navbar-logo'>
        <img src={images.amul} alt='Logo' />
        <p className='img-caption'>Ice Cream parlour</p>
      </div>
      <ul className='app__navbar-links'>
        <li className='p__opensans'>
          <a href='#home'>Home</a>
        </li>
        <li className='p__opensans'>
          <a href='#about'>About</a>
        </li>
        <li className='p__opensans'>
          <a href='#menu'>Menu</a>
        </li>
        <li className='p__opensans'>
          <a href='#must-try'>Must-Try</a>
        </li>
        <li className='p__opensans'>
          <a href='#contact'>Contact</a>
        </li>
      </ul>

      <div className='app__navbar-login'>
        <a className='p__opensans' href='#login'>
          Log In / Registration
        </a>
        <div />
        <a className='p__opensans' href='/'>
          Book Table
        </a>
      </div>

      <div className='app__navbar-smallScreen'>
        <GiHamburgerMenu
          color='#fff'
          fontSize={27}
          onClick={() => setToggleMenu(true)}
          cursor='pointer'
        />

        {toggleMenu && (
          <div className='app__navbar-smallScreen-overlay flex__center slide-bottom'>
            <MdOutlineRestaurantMenu
              className='overlay__close'
              fontSize={27}
              onClick={() => setToggleMenu(false)}
            />
            <ul className='app__navbar-smallScreen-links'>
              <li className='p__opensans'>
                <a href='#home'>Home</a>
              </li>
              <li className='p__opensans'>
                <a href='#about'>About</a>
              </li>
              <li className='p__opensans'>
                <a href='#menu'>Menu</a>
              </li>
              <li className='p__opensans'>
                <a href='#must-try'>Must-Try</a>
              </li>
              <li className='p__opensans'>
                <a href='#contact'>Contact</a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
