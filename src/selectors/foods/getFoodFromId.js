import { createSelector } from 'reselect';

const getFoodAndIdFromState = (id, foods) => ({
  id,
  foods,
});

export const getFoodFromId = createSelector([getFoodAndIdFromState], foodFromId => foodFromId.foods[foodFromId.id]);
