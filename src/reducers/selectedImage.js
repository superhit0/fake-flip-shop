import { SELECT_IMAGE } from '../actions/constants';

export default (state = 1, { type, payload } = {}) => {
  if(type === SELECT_IMAGE) {
    return payload.id;
  }
  return state;
}