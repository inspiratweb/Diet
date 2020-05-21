import React from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { MealsList } from 'components/Diet/MealsList';
import { getRoundedKCal } from 'utils/getRoundedKCal';
import { getTotalMacros } from 'utils/getTotalMacros';
import { getOrderedDiet } from 'utils/getOrderedDiet';
import { getFoodsFromFb } from 'selectors/firebase/getFoodsFromFb';
import { getMealsFromFb } from 'selectors/firebase/getMealsFromFb';
import { getSelectedDiet } from 'selectors/selectedDiet/getSelectedDiet';

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
          {getRoundedKCal(totalMacros)}
          KCal
        </span>
        <span className="diet-title-macros">
          <span className="diet-title-macros-p">
            {Math.ceil(totalMacros.p)}
            g
          </span>
          <span className="diet-title-macros-ch">
            {Math.ceil(totalMacros.ch)}
            g
          </span>
          <span className="diet-title-macros-f">
            {Math.ceil(totalMacros.f)}
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
