import React from 'react';
import { connect } from 'react-redux';

import './styles.css';

const mapStateToProps = ({ selectedImage, overlay }) => ({ selectedImage, overlay });

const App = ({ selectedImage, overlay }) => {
  const imagePosition = {
    objectPosition: `${overlay.xPer} ${overlay.yPer}`
  };
  return (
    <div className="large-img-container">
      <img className="large-img" src={`../../assets/large-img-${selectedImage}.jpeg`} style={imagePosition}/>
    </div>
  );
};

export default connect(mapStateToProps)(App);