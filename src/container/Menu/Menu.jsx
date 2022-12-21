import React from 'react';
import { MenuItem, SubHeading } from '../../components';
import { data, images } from '../../constants';

import './Menu.css';
const Menu = () => {
  return (
    <div className='app__menu flex__center section__padding' id='menu'>
      <div className='app__menu-title'>
        <SubHeading title='Menu That Fits Your Palatte' />
        <h1 className='headtext__cormorant'>Amul Special</h1>
      </div>

      <div className='app__menu-specialMenu'>
        <div className='app__menu-specialMenu-icecream flex__center'>
          <p className='app__menu-specialMenu-heading'>Ice Creams</p>
          <div className='app__menu-specialMenu-item'>
            {data.IceCreams.map((iceCream, index) => (
              <MenuItem
                key={iceCream.title + index}
                title={iceCream.title}
                price={iceCream.price}
                tags={iceCream.tags}
              />
            ))}
          </div>
        </div>

        <div className='app__menu-specialMenu-img'>
          <img src={images.menu4} alt='menu-img' />
          <img src={images.menu1} alt='mwnu-img' />
        </div>

        <div className='app__menu-specialMenu-shakes flex__center'>
          <p className='app__menu-specialMenu-heading'>Shakes</p>
          <div className='app__menu-specialMenu-item'>
            {data.Shakes.map((shake, index) => (
              <MenuItem
                key={shake.title + index}
                title={shake.title}
                price={shake.price}
                tags={shake.tags}
              />
            ))}
          </div>
        </div>
      </div>

      <div className='app__menu-specialMenu'>
        <div className='app__menu-specialMenu-snacks flex__center'>
          <p className='app__menu-specialMenu-heading'>Snacks</p>
          <div className='app__menu-specialMenu-item'>
            {data.Snacks.map((snack, index) => (
              <MenuItem
                key={snack.title + index}
                title={snack.title}
                price={snack.price}
                tags={snack.tags}
              />
            ))}
          </div>
        </div>

        <div className='app__menu-specialMenu-img'>
          <img src={images.menu3} alt='menu-img' />
          <img src={images.burger} alt='menu-img' />
        </div>
        <div className='app__menu-specialMenu-drinks flex__center'>
          <p className='app__menu-specialMenu-heading'>Cold & Cofee</p>
          <div className='app__menu-specialMenu-item'>
            {data.Drinks.map((drink, index) => (
              <MenuItem
                key={drink.title + index}
                title={drink.title}
                price={drink.price}
                tags={drink.tags}
              />
            ))}
          </div>
        </div>
      </div>
      <button type='button' className='custom__button'>view More</button>
    </div>
  );
};

export default Menu;
