import { SET_SELECTED_DIET } from './action-types';

export const setSelectedDiet = (diet) => ({
  type: SET_SELECTED_DIET,
  payload: diet
});
