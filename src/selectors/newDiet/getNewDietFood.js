export const getNewDietFood = (newDiet, meal, food) => newDiet[meal].find(meal => meal.food === food)
