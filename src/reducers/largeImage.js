import { SET_LARGE_IMAGE } from '../actions/constants';

const defaultValue = {
  width: 1000,
  height: 0
};

export default (state = defaultValue, { type, payload } = {}) => {
  if(type === SET_LARGE_IMAGE) {
    return {
      ...payload.props,
    }
  }
  return state;
};