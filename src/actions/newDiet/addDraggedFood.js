import { ADD_DRAGGED_FOOD } from './action-types';

export const addDraggedFood = (food, meal, foods) => ({
  type: ADD_DRAGGED_FOOD,
  foods,
  food,
  meal
});
