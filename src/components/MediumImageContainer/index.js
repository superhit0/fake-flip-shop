import React from 'react';
import './styles.css';

export default () => {
  return (
    <div className="med-img-container">
      <img className="med-img" src={`../../assets/med-img-${1}.jpeg`} />
    </div>
  );
};