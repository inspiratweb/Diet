import { createSelector } from 'reselect';

const getMealAndIdFromState = (id, meals) => ({
  id,
  meals,
});

export const getMealFromId = createSelector([getMealAndIdFromState], mealFromId => mealFromId.meals[mealFromId.id]);
