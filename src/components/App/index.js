import React from 'react';
import SmallImgContainer from '../SmallImgContainer';
import MediumImageContainer from '../MediumImageContainer';
import './styles.css';

export default () => {
  return (
    <div className='container'>
      <SmallImgContainer />
      <MediumImageContainer />
      <div>3</div>
    </div>
  );
};