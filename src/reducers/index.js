import { combineReducers } from 'redux';
import images from './images';
import selectedImage from './selectedImage';

export default combineReducers({
  images,
  selectedImage,
});