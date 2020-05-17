import React from 'react';
import { connect } from 'react-redux';
import { selectImage } from '../../actions';

import './styles.css';

const renderImages = (images) => {
  return images.map(image => (
    <div key={image}>
      <img className="small-img" data-id={image} src={`../../assets/small-img-${image}.jpeg`} />
    </div>
  ));
};

const selectImageHandler = (event, reduxSelectImageHandler) => {
  const id = event.target.dataset.id;
  if(!id) return;

  reduxSelectImageHandler(id);
};

const mapStateToProps = ({ images }) => ({ images });
const mapActionToProps = () => ({ selectImage });

const App = ({ images, selectImage }) => {
  return (
    <div className='small-img-container' onClick={(e)=> selectImageHandler(e, selectImage)}>
      {renderImages(images)}
    </div>
  );
};

export default connect(mapStateToProps, mapActionToProps())(App);