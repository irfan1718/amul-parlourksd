import React from 'react';
import { images } from '../../constants';

import './AboutUs.css';
const AboutUs = () => {
  return (
    <div
      className='app__aboutUs app__bg flex__center section__padding'
      id='about'
    >
      <div className='app__aboutUs-overlay flex__center'>
        <img src={images.A} alt='A-img' />
      </div>

      <div className='app__aboutUs-content flex__center'>
        <div className='app__aboutUs-content-about'>
          <h1 className='headtext__cormorant'>About Us</h1>
          <img src={images.spoon} alt='spoon' />
          <p className='p__opensans'>
            Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Quis
            Pharetra Adipiscing Ultrices Vulputate Posuere Tristique. In Sed
            Odio Nec Aliquet Eu Proin Mauris Et.
          </p>
          <button className='custom__button'>Know More</button>
        </div>

        <div className='app__aboutUs-content-cone'>
          <img src={images.cone} alt='cone' />
        </div>

        <div className='app__aboutUs-content-history'>
          <h1 className='headtext__cormorant'>History</h1>
          <img src={images.spoon} alt='spoon' />
          <p className='p__opensans'>
            Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Quis
            Pharetra Adipiscing Ultrices Vulputate Posuere Tristique. In Sed
            Odio Nec Aliquet Eu Proin Mauris Et.
          </p>
          <button className='custom__button'>Know More</button>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
