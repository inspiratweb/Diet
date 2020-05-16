import { REMOVE_GLOBAL_ERROR } from './action-types';

export const removeGlobalError = (error) => ({
  type: REMOVE_GLOBAL_ERROR,
  payload: error
});
