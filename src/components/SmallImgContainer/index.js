import React from 'react';
import { connect } from 'react-redux';

import './styles.css';

const renderImages = (images) => {
  return images.map(image => (
    <div key={image}>
      <img className="small-img" src={`../../assets/small-img-${image}.jpeg`} />
    </div>
  ));
};

const mapStateToProps = ({ images }) => ({ images });

const App = ({ images }) => {
  return (
    <div className='small-img-container'>
      {renderImages(images)}
    </div>
  );
};

export default connect(mapStateToProps)(App);