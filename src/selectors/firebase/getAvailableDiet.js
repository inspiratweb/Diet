import { createSelector } from 'reselect';
import { getDietsFromFb } from './getDietsFromFb';
import { getRouterFromFb } from './getRouterFromFb';

export const getAvailableDiet = createSelector(
  getDietsFromFb,
  getRouterFromFb,
  (diets, router) => (Object.keys(diets)).indexOf(router) >= 0
);
