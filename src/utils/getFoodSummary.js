import { getFoodFromId } from '../selectors/foods/getFoodFromId';

export const getFoodSummary = ({ meals, foods }) => meals.map((meal, i) => {
  const mealName = getFoodFromId(meal.food, foods);

  return i < meals.length - 1 ? `${mealName.code}, ` : mealName.code;
});
