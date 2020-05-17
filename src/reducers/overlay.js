import { SET_OVERLAY_POSITION } from '../actions/constants';

const defaultValue = {
  x: '0',
  y: '0',
  xPer: '0',
  yPer: '0',
};

export default (state = defaultValue, { type, payload } = {}) => {
  if(type === SET_OVERLAY_POSITION) {
    return {
      ...payload.position,
    }
  }
  return state;
};