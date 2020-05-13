import React from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { MealsList } from './MealsList';
import { getRoundedKcal } from '../../utils/getRoundedKcal';
import { getTotalMacros } from '../../utils/getTotalMacros';
import { getOrderedDiet } from '../../utils/getOrderedDiet';
import { getFoodsFromFb } from '../../selectors/firebase/getFoodsFromFb';
import { getMealsFromFb } from '../../selectors/firebase/getMealsFromFb';
import { getSelectedDiet } from '../../selectors/selectedDiet/getSelectedDiet';

export const Diet = ({ className }) => {
  const meals = useSelector(getMealsFromFb);
  const foods = useSelector(getFoodsFromFb);
  const selectedDiet = useSelector(getSelectedDiet);

  const orderedDiet = getOrderedDiet(selectedDiet, meals);
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
};
