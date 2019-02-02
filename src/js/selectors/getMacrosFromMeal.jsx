import getFoodIdFromMeal from './getFoodIdFromMeal.jsx';

const getTotalKcal = macros =>
  (macros.p * 4) + (macros.ch * 4) + (macros.f * 9);

export default (meal, foods) => {
  const foodFromMeal = getFoodIdFromMeal(meal);
  return foodFromMeal
    .map(ffm => foods[ffm])
    .reduce((acc, val) =>
      acc + (val.macros ? getTotalKcal(val.macros) : 0)
    , 0);
};
