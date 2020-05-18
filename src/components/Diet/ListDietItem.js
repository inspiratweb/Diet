import React, { useState } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { getRoundedKCal } from 'utils/getRoundedKCals';
import { getMacrosPercent } from 'utils/getMacrosPercent';
import { Pie } from 'components/Common/Pie';
import { FoodList } from 'components/Diet/FoodList';
import { getFoodSummary } from 'utils/getFoodSummary';
import { applyKeyboardNavigation } from 'utils/applyKeyboardNavigation';
import { ENTER_KEY_CODE } from 'consts/keyboard-key-codes';

export const ListDietItem = ({
  mealName, mealFoods, foods, macros
}) => {
  const [visibleItem, setVisibleItem] = useState(false);
  const [touchStartX, setTouchStartX] = useState(0);
  const [swipe, setSwipe] = useState(false);
  const [showLightbox, setShowLightbox] = useState(false);
  const macrosPercent = getMacrosPercent(macros);
  const kcal = getRoundedKCal(macros);

  const handleClick = () => {
    setVisibleItem(!visibleItem);
  };

  const handleTouchStart = (e) => {
    setTouchStartX(e.nativeEvent.changedTouches[0].clientX);
  };

  const handleTouchEnd = (e) => {
    const touchEndX = e.nativeEvent.changedTouches[0].clientX;

    // adding class on swipe
    if (touchEndX + 90 < touchStartX) {
      setSwipe(false);
    }

    if (touchEndX - 90 > touchStartX) {
      setSwipe(true);
    }
  };

  const openLightbox = (e) => {
    e.stopPropagation();
    setShowLightbox(true);
  };

  const closeLightbox = (e) => {
    e.stopPropagation();
    setShowLightbox(false);
  };

  return (
    <li
      className={classNames('diet-item', { active: swipe })}
      role="button"
      aria-label="Press ENTER Keyboard Key to expand/contract Meal information"
      tabIndex="0"
      onClick={handleClick}
      onKeyDown={
        (e) => applyKeyboardNavigation(e, ENTER_KEY_CODE, handleClick)
      }
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <Pie p={macrosPercent.p} ch={macrosPercent.ch} f={macrosPercent.f} />
      <h3 className="diet-name">
        <p className="diet-food-summary">
          {mealName}
          <span className="diet-food-cals">{`${kcal}KCal`}</span>
        </p>
      </h3>
      {
        visibleItem
          ? (
            <FoodList
              meals={mealFoods}
              showLightbox={showLightbox}
              openLightbox={openLightbox}
              closeLightbox={closeLightbox}
            />
          )
          : <p className="diet-food-summary">{ getFoodSummary({ meals: mealFoods, foods }) }</p>
      }
    </li>
  );
};

ListDietItem.propTypes = {
  mealName: PropTypes.string,
  mealFoods: PropTypes.arrayOf(
    PropTypes.shape({
      food: PropTypes.string,
      qtty: PropTypes.any,
    })
  ),
  foods: PropTypes.shape({
    any: PropTypes.shape({
      code: PropTypes.string,
      desc: PropTypes.string,
      notbuy: PropTypes.bool,
      skipGrams: PropTypes.bool,
    }),
  }),
  macros: PropTypes.shape({
    p: PropTypes.number,
    ch: PropTypes.number,
    f: PropTypes.number,
  })
};

ListDietItem.defaultProps = {
  mealName: '',
  mealFoods: [],
  foods: {},
  macros: {}
};
