import { getDietsFromFb } from "./getDietsFromFb";
import { getRouterFromFb } from "./getRouterFromFb";
import { createSelector } from "reselect";

export const getAvailableDiet = createSelector(
  getDietsFromFb,
  getRouterFromFb,
  (diets, router) => (Object.keys(diets)).indexOf(router) >= 0
);
