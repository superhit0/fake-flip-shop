import { SET_OVERLAY_POSITION } from './constants';

export const setOverlayPosition = (position) => {
  return {
    type: SET_OVERLAY_POSITION,
    payload: {
      position,
    }
  }
};