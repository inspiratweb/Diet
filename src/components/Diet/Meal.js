import React from 'react';
import PropTypes from 'prop-types';

export const Meal = ({ meal, mealName }) => (
  <li key={mealName.code}>
    <span className={mealName.macros ? undefined : 'diet-food-detail-empty'}>
      {mealName.skipGrams ? `(${meal.qtty}) ${mealName.desc}` : `${meal.qtty}g: ${mealName.desc}`}
    </span>
  </li>
);

Meal.propTypes = {
  meal: PropTypes.shape({
    food: PropTypes.string,
    qtty: PropTypes.any,
  }),
  mealName: PropTypes.shape({
    code: PropTypes.string,
    desc: PropTypes.string,
    notbuy: PropTypes.bool,
    skipGrams: PropTypes.bool,
    macros: PropTypes.shape({
      p: PropTypes.number,
      ch: PropTypes.number,
      f: PropTypes.number
    })
  }),
};

Meal.defaultProps = {
  meal: {},
  mealName: {}
};
