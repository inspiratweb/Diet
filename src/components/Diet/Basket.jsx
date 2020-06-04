import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { CookiesProvider } from 'react-cookie';
import { ListBasketItem } from 'components/Diet/ListBasketItem';
import { getFoodsFromFb } from 'selectors/firebase/data/getFoodsFromFb';
import { getSelectedDiet } from 'selectors/selectedDiet/getSelectedDiet';

const Basket = ({ className }) => {
  const foods = useSelector(getFoodsFromFb);
  const selectedDiet = useSelector(getSelectedDiet);

  const foodFromDiet = [...new Set(Object.values(selectedDiet)
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
