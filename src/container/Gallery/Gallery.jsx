import React from 'react';
import { useRef } from 'react';
import {
  BsInstagram,
  BsArrowLeftShort,
  BsArrowRightShort,
} from 'react-icons/bs';
import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Gallery.css';

const galleryImages = [
  images.gallery1,
  images.gallery2,
  images.gallery3,
  images.gallery4,
  images.gallery5,
  images.gallery6,
  images.gallery7,
  images.gallery8,
];

const Gallery = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    const { current } = scrollRef;
    if (direction === 'left') {
      current.scrollLeft -= 300;
    } else {
      current.scrollLeft += 300;
    }
  };

  return (
    <div className='app__gallery  flex__center'>
      <div className='app__gallery-content'>
        <SubHeading title={'Instagram'} />
        <h1 className='headtext__cormorant'>Photo gallery</h1>
        <p className='p__opensans'>
          Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Volutpat
          Mattis Ipsum Turpis Elit Elit Scelerisque Egestas Mu
        </p>
        <button
          type='button'
          className='custom__button'
          style={{ marginTop: '1rem' }}
        >
          <a href='https://www.instagram.com/amulparlourksd/' target={'_blank'}>
            View More
          </a>
        </button>
      </div>

      <div className='app__gallery-images'>
        <div className='app__gallery-images-container' ref={scrollRef}>
          {galleryImages.map((image, index) => (
            <div
              className='app__gallery-images-card flex__center'
              key={`gallery_image.${index + 1}`}
            >
              <img
                src={image}
                alt='gallery-img'
                onClick={'https://www.instagram.com/amulparlourksd/'}
              />

              <BsInstagram className='gallery__img-icon' />
            </div>
          ))}
        </div>
        <div className='app__gallery-img-arrows'>
          <BsArrowLeftShort
            className='gallery__arrow-icon'
            onClick={() => scroll('left')}
          />
          <BsArrowRightShort
            className='gallery__arrow-icon'
            onClick={() => scroll('right')}
          />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
