import { SET_LARGE_IMAGE } from './constants';
export const setLargeImageProps = (props) => {
  return {
    type: SET_LARGE_IMAGE,
    payload: {
      props,
    }
  }
}