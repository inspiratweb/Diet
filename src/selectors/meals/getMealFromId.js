import { createSelector } from 'reselect';

const getMealsAndIdFromState = (id, meals) => ({
  id,
  meals,
});

export const getMealFromId = createSelector(
  [getMealsAndIdFromState], (mealFromId) => mealFromId.meals[mealFromId.id]
);
