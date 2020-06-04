import { getFoodFromId } from 'utils/getFoodFromId';

const defaultArguments = { meals: [], foods: {}};

export const getFoodSummary = ({ meals, foods } = defaultArguments) => meals.map((meal, i) => {
  const mealName = getFoodFromId(meal.food, foods);

  return i < meals.length - 1 ? `${mealName.code}, ` : mealName.code;
});
