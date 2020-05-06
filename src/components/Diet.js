import React from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { getRoundedKcal } from '../utils/getRoundedKcal';
import { getOrderedDiet } from '../selectors/diet/getOrderedDiet';
import { MealsList } from './MealsList';
import { getDiet } from '../selectors/diet/getDiet';
import { getMeals } from '../selectors/meals/getMeals';
import { getSimilars } from '../selectors/similars/getSimilars';
import { getFoods } from '../selectors/foods/getFoods';
import { getRouter } from '../selectors/router/getRouter';
import { getMacrosFromMeal } from '../selectors/meals/getMacrosFromMeal';

export const Diet = ({ className }) => {
  const diets = useSelector(getDiet);
  const meals = useSelector(getMeals);
  const foods = useSelector(getFoods);
  const similars = useSelector(getSimilars);
  const router = useSelector(getRouter);

  const diet = diets[router];
  let totalMacros = { p: 0, ch: 0, f: 0 };

  Object.entries(meals).length > 0 && Object.entries(getOrderedDiet(diet, meals)).forEach((meal) => {
    const mealMacros = getMacrosFromMeal(meal[1], foods);

    totalMacros = {
      p: totalMacros.p += mealMacros.p,
      ch: totalMacros.ch += mealMacros.ch,
      f: totalMacros.f += mealMacros.f
    };
  });

  return (
    <ul className={className}>
      <h3 className="diet-title">
        <span className="diet-title-kcal">{getRoundedKcal(totalMacros)}KCal</span>
        <span className="diet-title-macros">
          <span className="diet-title-macros-p">{Math.round(totalMacros.p)}g</span>
          <span className="diet-title-macros-ch">{Math.round(totalMacros.ch)}g</span>
          <span className="diet-title-macros-f">{Math.round(totalMacros.f)}g</span></span>
      </h3>
      <MealsList
        meals={meals}
        foods={foods}
        diets={diets}
        similars={similars}
        router={router}
      />
    </ul>
  );
}

Diet.propTypes = {
  className: PropTypes.string.isRequired,
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

Diet.defaultProps = {
  diets: {},
  meals: {},
  foods: {},
  similars: [[]],
  router: '',
};
