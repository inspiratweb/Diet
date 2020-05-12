import { CHANGE_FOOD_QUANTITY } from './action-types';

export const changeFoodQuantity = (food, meal, inputQtty) => ({
  type: CHANGE_FOOD_QUANTITY,
  food,
  meal,
  inputQtty
});
