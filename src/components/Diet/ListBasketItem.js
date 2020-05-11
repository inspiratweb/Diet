import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useCookies } from 'react-cookie';
import classNames from 'classnames';

export const ListBasketItem = ({ food }) => {
  const [touchStartX, setTouchStartX] = useState(0);
  const [swipe, setSwipe] = useState(false);
  const [cookies, setCookies] = useCookies(['basket']);

  useEffect(() => {
    // Checking basket cookie and load initial list
    if (
      cookies.basket
      && cookies.basket.indexOf(food.code) > -1
    ) {
      setSwipe(true);
    }
  }, [food]);

  const handleTouchStart = (e) => {
    setTouchStartX(e.nativeEvent.changedTouches[0].clientX);
  };

  const setCookie = (newCookie) => {
    const d = new Date();
    const minutes = 60 * 24 * 10;
    d.setTime(d.getTime() + minutes * 60 * 1000);

    setCookies('basket', newCookie, { path: '/', expires: d });
  };

  const handleTouchEnd = (e) => {
    const touchEndX = e.nativeEvent.changedTouches[0].clientX;
    const tempBasket = cookies.basket || [];

    // adding class on swipe
    if (touchEndX + 50 < touchStartX && swipe) {
      setSwipe(false);

      // Removing this product from basket cookies
      tempBasket.splice(tempBasket.indexOf(food.code), 1);
      setCookie(tempBasket);
    }

    if (touchEndX - 50 > touchStartX && !swipe) {
      setSwipe(true);

      // Adding this product to basket cookies
      tempBasket.push(food.code);
      setCookie(tempBasket);
    }
  };

  return (
    <li
      // eslint-disable-next-line
      className={classNames('basket-item', { ["basket-item-dontbuy"]: food.notbuy, active: swipe })}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {food.desc}
    </li>
  );
};

ListBasketItem.propTypes = {
  food: PropTypes.shape({
    code: PropTypes.string,
    desc: PropTypes.string,
    notbuy: PropTypes.bool,
    skiGrams: PropTypes.bool,
    eq: PropTypes.number,
    macros: PropTypes.shape({
      p: PropTypes.number,
      ch: PropTypes.number,
      chs: PropTypes.number,
      f: PropTypes.number,
      fs: PropTypes.number,
    })
  })
};
