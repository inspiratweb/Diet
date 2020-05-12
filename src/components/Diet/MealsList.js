import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { ListDietItem } from './ListDietItem';
import { getOrderedDiet } from '../../utils/getOrderedDiet';
import { getMealFromId } from '../../utils/getMealFromId';
import { getMacrosFromMeal } from '../../utils/getMacrosFromMeal';
import { getFoodsFromFb } from '../../selectors/firebase/getFoodsFromFb';
import { getSimilarsFromFb } from '../../selectors/firebase/getSimilarsFromFb';
import { getRouterFromFb } from '../../selectors/firebase/getRouterFromFb';
import { getMealsFromFb } from '../../selectors/firebase/getMealsFromFb';
import { getDietsFromFb } from '../../selectors/firebase/getDietsFromFb';

export const MealsList = () => {
  const diets = useSelector(getDietsFromFb);
  const meals = useSelector(getMealsFromFb);
  const foods = useSelector(getFoodsFromFb);
  const similars = useSelector(getSimilarsFromFb);
  const router = useSelector(getRouterFromFb);
  const { selectedDiet } = useParams();

  const diet = diets[selectedDiet] || diets[router];

  return Object.entries(meals).length > 0
  && Object.entries(getOrderedDiet(diet, meals)).map((meal) => {
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

MealsList.propTypes = {
  diets: PropTypes.shape({
    any: PropTypes.arrayOf(
      PropTypes.number,
      PropTypes.any,
    )
  }),
  meals: PropTypes.shape({
    any: PropTypes.shape({
      time: PropTypes.number,
      desc: PropTypes.string,
    })
  }),
  foods: PropTypes.shape({
    any: PropTypes.shape({
      code: PropTypes.string,
      desc: PropTypes.string,
    })
  }),
  similars: PropTypes.arrayOf(
    PropTypes.arrayOf(
      PropTypes.string,
    )
  ),
  router: PropTypes.string
};

MealsList.defaultProps = {
  diets: {},
  meals: {},
  foods: {},
  similars: [[]],
  router: '',
};
