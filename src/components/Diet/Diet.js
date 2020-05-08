import React from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { getRoundedKcal } from '../../utils/getRoundedKcal';
import { getTotalMacros } from '../../utils/getTotalMacros';
import { getOrderedDiet } from '../../selectors/diet/getOrderedDiet';
import { MealsList } from './MealsList';
import { getDiet } from '../../selectors/diet/getDiet';
import { getMeals } from '../../selectors/meals/getMeals';
import { getFoods } from '../../selectors/foods/getFoods';
import { getRouter } from '../../selectors/router/getRouter';

export const Diet = ({ className }) => {
  const diets = useSelector(getDiet);
  const meals = useSelector(getMeals);
  const foods = useSelector(getFoods);
  const router = useSelector(getRouter);

  const diet = diets[router];
  const orderedDiet = getOrderedDiet(diet, meals);
  const totalMacros = getTotalMacros(meals, orderedDiet, foods);

  return (
    <ul className={className}>
      <h3 className="diet-title">
        <span className="diet-title-kcal">
          {getRoundedKcal(totalMacros)}
          KCal
        </span>
        <span className="diet-title-macros">
          <span className="diet-title-macros-p">
            {Math.round(totalMacros.p)}
            g
          </span>
          <span className="diet-title-macros-ch">
            {Math.round(totalMacros.ch)}
            g
          </span>
          <span className="diet-title-macros-f">
            {Math.round(totalMacros.f)}
            g
          </span>

        </span>
      </h3>
      <MealsList />
    </ul>
  );
};

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
};

Diet.defaultProps = {
  diets: {},
  meals: {},
  foods: {},
};
