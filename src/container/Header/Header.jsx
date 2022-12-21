import React from 'react';
import { SubHeading } from '../../components';
import { images } from '../../constants';

import './Header.css';
const Header = () => {
  return (
    <div className='app__header app__wrapper section__padding' id='home'>
      <div className='app__wrapper_info'>
        <SubHeading title={'Chase The New Flavour'} />
        <h1 className='app__header-h1'>The Key To Fine Flavour</h1>
        <p className='p__opensans' style={{ margin: '2rem 0' }}>
          Sit Tellus Lobortis Sed Senectus Vivamus Molestie. Condimentum
          Volutpat Morbi Facilisis Quam Scelerisque Sapien. Et, Penatibus
          Aliquam Amet Tellus
        </p>
        <button type='button' className='custom__button'>
          Explore More
        </button>
      </div>

      <div className='app__wrapper_img'>
        <img className='header-img' src={images.amulHeader} alt='header-img' />
      </div>
    </div>
  );
};

export default Header;
