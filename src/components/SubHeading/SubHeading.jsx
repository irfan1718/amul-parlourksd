import React from 'react';

import { images } from '../../constants';

const SubHeading = ({ title }) => {
  return (
    <div>
      <p className='p__cormorant'>{title}</p>
      <img src={images.spoon} alt='spoon' />
    </div>
  );
};

export default SubHeading;
