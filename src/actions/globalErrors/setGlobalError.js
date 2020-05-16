import { SET_GLOBAL_ERROR } from './action-types';

export const setGlobalError = (error) => ({
  type: SET_GLOBAL_ERROR,
  payload: error
});
