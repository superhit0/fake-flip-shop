import React from 'react';
import SmallImgContainer from '../SmallImgContainer';
import MediumImageContainer from '../MediumImageContainer';
import LargeImageContainer from '../LargeImageContainer';
import './styles.css';

export default () => {
  return (
    <div className='container'>
      <SmallImgContainer />
      <MediumImageContainer />
      <LargeImageContainer />
    </div>
  );
};