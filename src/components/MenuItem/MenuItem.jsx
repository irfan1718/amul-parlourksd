import React from 'react';

import './MenuItem.css';

const MenuItem = ({ title, price, tags }) => {
  return (
    <div className='app__menuItem'>
      <div className='app__menuItem-head'>
        <div className='app__menuItem-name'>
          <p className='p__cormorant' style={{ color: '#DCCA87',fontSize:"22px" }}>
            {title}
          </p>
        </div>

        <div className='app__menuItem-dash' />

        <div className='app__mnuIten-price'>
          <p className='p__cormorant'>{price}</p>
        </div>
      </div>

      <div className='app__menuItem-sub'>
        <p className='p__opensans' style={{ color: '#AAA' }}>
          {tags}
        </p>
      </div>
    </div>
  );
};

export default MenuItem;
