import { createSelector } from 'reselect';

const getFoodFromId = (id, foods) => ({
  id,
  foods,
});

export default createSelector([getFoodFromId], foodFromId => foodFromId.foods[foodFromId.id]);
