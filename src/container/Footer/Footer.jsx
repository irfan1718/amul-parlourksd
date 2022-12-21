import React from 'react';
import { images } from '../../constants';
import { FiFacebook, FiInstagram, FiTwitter } from 'react-icons/fi';

import './Footer.css';
const Footer = () => {
  return (
    <div className='app__footer section__padding'>
      <div className='app__footer-links'>
        <div className='app__footer-contact'>
          <h1 className='app__footer-headtext' style={{ marginBottom: '3rem' }}>
            Contact Us
          </h1>
          <p className='p__opensans'>Bendichal Complex, Bank Road, KSD</p>
          <p className='p__opensans'>+919946494955</p>
        </div>

        <div className='app__footer-logo'>
          <img src={images.amul} alt='amul-logo' />
          <p className='p__opensans'>
            "The Best Way To Find Yourself Is To Lose Yourself In The Service Of
            Others."
          </p>
          <img src={images.spoon} alt='spoon-img' style={{ marginTop: 15 }} />
          <div className='app__footer-icons'>
            <FiFacebook />
            <FiTwitter />
            <FiInstagram />
          </div>
        </div>

        <div className='app__footer-work'>
          <h1 className='app__footer-headtext'>Working Hours</h1>
          <p className='p__opensans'> Friday :</p>
          <p className='p__opensans'>2:00 Pm - 11:00 Pm</p>

          <p className='p__opensans'>Saturday - Thursday :</p>
          <p className='p__opensans'>11:30 Am - 11:00 Pm</p>
        </div>
      </div>

      <div className='footer__copyright'>
        <p className='p__opensans' style={{ color: 'var(--color-grey)' }}>
          2021 Amul Icecream Parlour-ksd. All Rights Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
