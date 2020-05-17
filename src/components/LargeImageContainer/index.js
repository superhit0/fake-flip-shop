import React from 'react';
import { connect } from 'react-redux';

import './styles.css';

const mapStateToProps = ({ selectedImage }) => ({ selectedImage });

const App = ({ selectedImage }) => {
  return (
    <div className="large-img-container">
      <img className="large-img" src={`../../assets/large-img-${selectedImage}.jpeg`} />
    </div>
  );
};

export default connect(mapStateToProps)(App);