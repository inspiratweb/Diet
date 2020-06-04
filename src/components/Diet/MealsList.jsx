import React from 'react';
import { useSelector } from 'react-redux';
import { getOrderedDiet } from 'utils/getOrderedDiet';
import { ListDietItem } from 'components/Diet/ListDietItem';
import { getMealFromId } from 'utils/getMealFromId';
import { getMacrosFromMeal } from 'utils/getMacrosFromMeal';
import { getFoodsFromFb } from 'selectors/firebase/data/getFoodsFromFb';
import { getSimilarsFromFb } from 'selectors/firebase/data/getSimilarsFromFb';
import { getMealsFromFb } from 'selectors/firebase/data/getMealsFromFb';
import { getSelectedDiet } from 'selectors/selectedDiet/getSelectedDiet';

export const MealsList = () => {
  const meals = useSelector(getMealsFromFb);
  const foods = useSelector(getFoodsFromFb);
  const similars = useSelector(getSimilarsFromFb);
  const selectedDiet = useSelector(getSelectedDiet);

  return Object.entries(meals).length > 0
  && Object.entries(getOrderedDiet(selectedDiet, meals)).map((meal) => {
    const mealName = getMealFromId(meal[0], meals).desc;
    const mealMacros = getMacrosFromMeal(meal[1], foods);

    return (
      <ListDietItem
        key={mealName}
        mealName={mealName}
        mealFoods={meal[1]}
        foods={foods}
        macros={mealMacros}
        similars={similars}
      />
    );
  });
};
