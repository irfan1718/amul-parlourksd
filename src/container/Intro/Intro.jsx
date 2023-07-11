import React, { useRef,useState } from 'react';

import { BsFillPlayFill, BsPauseFill } from 'react-icons/bs';

import { video } from '../../constants';

import './Intro.css';
const Intro = () => {
  const [playVideo, setPlayVideo] = useState(false);

  const vidRef = useRef();

  const handleClick = () => {
    setPlayVideo((prevPlayVideo) => !prevPlayVideo);
    if (playVideo) {
      vidRef.current.pause();
    } else {
      vidRef.current.play();
    }
  };

  return (
    <div className='app__video'>
      <video
        src={video}
        controls={false}
        ref={vidRef}
        type='video/mp4'
        muted
        loop
      />

      <div className='app__video-overlay flex__center'>
        <div
          className='app__video-overlay-circle flex__center'
          onClick={handleClick}
        >
          {playVideo ? (
            <BsPauseFill color='#fff' fontSize={30} />
          ) : (
            <BsFillPlayFill color='#fff' fontSize={30} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Intro;
