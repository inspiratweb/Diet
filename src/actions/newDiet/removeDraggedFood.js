import { REMOVE_DRAGGED_FOOD } from './action-types';

export const removeDraggedFood = (food, meal) => ({
  type: REMOVE_DRAGGED_FOOD,
  food,
  meal
});
