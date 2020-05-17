import { SELECT_IMAGE } from './constants';

export const selectImage = (id) => ({
  type: SELECT_IMAGE,
  payload: {
    id,
  },
});