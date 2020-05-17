import { combineReducers } from 'redux';
import images from './images';
import selectedImage from './selectedImage';
import overlay from './overlay';
import largeImage from './largeImage';

export default combineReducers({
  images,
  selectedImage,
  overlay,
  largeImage
});