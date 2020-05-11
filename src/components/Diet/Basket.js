import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { CookiesProvider } from 'react-cookie';
import { ListBasketItem } from './ListBasketItem';
import { getFoodsFromFb } from '../../selectors/firebase/getFoodsFromFb';
import { getRouterFromFb } from '../../selectors/firebase/getRouterFromFb';
import { getDietsFromFb } from '../../selectors/firebase/getDietsFromFb';
import { useParams } from 'react-router-dom';

const Basket = ({ className }) => {
  const diets = useSelector(getDietsFromFb);
  const foods = useSelector(getFoodsFromFb);
  const router = useSelector(getRouterFromFb);
  const { selectedDiet } = useParams();

  const diet = diets[selectedDiet] || diets[router];

  const foodFromDiet = [...new Set(Object.values(diet)
    .reduce((a, b) => [...a, ...b], [])
    .map((food) => food.food))];

  return (
    <CookiesProvider>
      <ul className={className}>
        { Object.entries(foods).length > 0 && (
          foodFromDiet.map((ffd) => (
            <ListBasketItem
              key={ffd}
              food={foods[ffd]}
            />
          ))
        )}
      </ul>
    </CookiesProvider>
  );
};

Basket.propTypes = {
  className: PropTypes.string.isRequired,
};

export { Basket };
