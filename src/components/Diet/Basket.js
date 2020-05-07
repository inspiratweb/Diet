import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { getDiet } from '../../selectors/diet/getDiet';
import { getFoods } from '../../selectors/foods/getFoods';
import { getRouter } from '../../selectors/router/getRouter';
import { ListBasketItem } from './ListBasketItem';

const Basket = ({ className }) => {
  const diets = useSelector(getDiet);
  const foods = useSelector(getFoods);
  const router = useSelector(getRouter);

  const diet = diets[router];
  const foodFromDiet = [...new Set(Object.values(diet)
    .reduce((a, b) =>
      [...a, ...b], []
    )
    .map(food => food.food)
  )];

  return (
    <ul className={className}>
      { Object.entries(foods).length > 0 && (
        foodFromDiet.map(ffd => (
          <ListBasketItem
            key={ffd}
            food={foods[ffd]}
          />
        ))
      )}
    </ul>
  );
};

Basket.propTypes = {
  className: PropTypes.string.isRequired,
};

export { Basket };
