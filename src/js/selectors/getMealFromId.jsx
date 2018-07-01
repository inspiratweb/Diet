import { createSelector } from 'reselect';

const getMealFromId = (id, meals) => ({
  id,
  meals,
});

export default createSelector([getMealFromId], mealFromId => mealFromId.meals[mealFromId.id]);
