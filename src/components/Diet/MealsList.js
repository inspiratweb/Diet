import React from "react";
import { ListDietItem } from "./ListDietItem";
import PropTypes from 'prop-types';
import { getOrderedDiet } from "../../selectors/diet/getOrderedDiet";
import { getMealFromId } from '../../selectors/meals/getMealFromId';
import { getMacrosFromMeal } from '../../selectors/meals/getMacrosFromMeal';

const MealsList = ({ meals, foods, diets, similars, router }) => {
  const diet = diets[router];

  return Object.entries(meals).length > 0 && Object.entries(getOrderedDiet(diet, meals)).map((meal) => {
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

export { MealsList }
