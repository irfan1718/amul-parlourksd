import React from 'react';
import { SubHeading } from '../../components';
import { images } from '../../constants';

const FindUs = () => {
  return (
    <div className='app__wrapper app__bg section__padding' id='contact'>
      <div className='app__wrapper_info'>
        <SubHeading title={'Contact'} />
        <h1 className='headtext__cormorant' style={{ marginbottom: '3rem' }}>
          Find Us
        </h1>
        <p className='p__opensans'>
          📍Bendichal Complex, Bank Road, Kasaragod, Kerala
        </p>
        <p
          className='p__cormorant'
          style={{ margin: '2rem 0', color: 'var(--color-golden)' }}
        >
          Opening Hours
        </p>
        <p className='p__opensans'>⏱️ Fri : 2:00 Pm - 11:00 Pm</p>
        <p className='p__opensans'>⏱️ Sat - Thu : 11:30 Am - 11:00 Pm</p>
        <button className='custom__button' style={{ marginTop: '2rem' }}>
          <a href='https://goo.gl/maps/MV641LhNUpeXzU2m8' target={"_blank"}>Location</a>
        </button>
      </div>

      <div className='app__wrapper_img'>
        <img src={images.cofee} alt='' />
      </div>
    </div>
  );
};

export default FindUs;
