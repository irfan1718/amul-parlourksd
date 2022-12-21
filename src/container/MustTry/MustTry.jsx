import React from 'react';
import { SubHeading } from '../../components';
import { data, images } from '../../constants';

import './MustTry.css';

const ItemCard = ({ item: { imgUrl, title, subTitle } }) => (
  <div className='app__itemCard'>
    <img src={imgUrl} alt='must-try' />
    <div className='app__item-name'>
      <p
        className='p__cormorant'
        style={{ color: '#DCCA87', fontSize: '20px' }}
      >
        {title}
      </p>
      <p className='p__opensans' style={{ color:"#fff" }}>
        {subTitle}
      </p>
    </div>
  </div>
);

const MustTry = () => {
  return (
    <div className='app__bg app__wrapper section__padding' id='must-try'>
      <div className='app__wrapper_info'>
        <SubHeading title={'Sugar, spice, and everything nice.'} />
        <h1 className='headtext__cormorant'>Must Try Item</h1>
        <div className='app__mustTry'>
          {data.mustTry.map((item) => (
            <ItemCard item={item} key={item.title} />
          ))}
        </div>
      </div>

      <div className='app__wrapper_img'>
        <img src={images.tryThis} alt='mustTry-img' />
      </div>
    </div>
  );
};

export default MustTry;
