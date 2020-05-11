export const getNewDietFood = (newDiet, meal, food) => (
  newDiet[meal].find((newDietMeal) => newDietMeal.food === food)
);
