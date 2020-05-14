import React from 'react';
import './styles.css';

const images = [1, 2, 3, 4, 5, 6];

const renderImages = () => {
  return images.map(image => (
    <div key={image}>
      <img className="small-img" src={`../../assets/small-img-${image}.jpeg`} />
    </div>
  ));
};

export default () => {
  return (
    <div className='small-img-container'>
      {renderImages()}
    </div>
  );
};