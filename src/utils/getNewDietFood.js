export const getNewDietFood = (newDiet = {}, meal = '', food = '') => (
  (newDiet[meal] && newDiet[meal].find((newDietMeal) => newDietMeal.food === food)) || {}
);
