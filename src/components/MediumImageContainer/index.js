import React from 'react';
import { connect } from 'react-redux';

import './styles.css';

const mapStateToProps = ({ selectedImage }) => ({ selectedImage });

const App = ({ selectedImage }) => {
  return (
    <div className="med-img-container">
      <img className="med-img" src={`../../assets/med-img-${selectedImage}.jpeg`} />
    </div>
  );
};

export default connect(mapStateToProps)(App);