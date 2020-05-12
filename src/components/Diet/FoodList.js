import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { getFoodFromId } from '../../utils/getFoodFromId';
import { getSimilarFoods } from '../../utils/getSimilarFoods';
import { Meal } from './Meal';
import { LightBox } from './LightBox';
import { ESC_KEY_CODE, SPACE_KEY_CODE } from '../../consts/keyboard-key-codes';
import { applyKeyboardNavigation } from '../../utils/applyKeyboardNavigation';
import { getFoodsFromFb } from '../../selectors/firebase/getFoodsFromFb';
import { getSimilarsFromFb } from '../../selectors/firebase/getSimilarsFromFb';

export const FoodList = ({
  meals, showLightbox, openLightbox, closeLightbox
}) => {
  const foods = useSelector(getFoodsFromFb);
  const similars = useSelector(getSimilarsFromFb);
  const lightBoxData = [];

  const mealList = meals.map((meal) => {
    const mealName = getFoodFromId(meal.food, foods);
    const similarFoods = getSimilarFoods(meal, foods, similars);

    if (similarFoods) {
      lightBoxData.push([meal, similarFoods]);
    }
    return <Meal key={`${mealName}-${meal.food}`} meal={meal} mealName={mealName} />;
  });

  const renderClassDetail = (lightbox) => (lightbox ? 'diet-food-detail withLightbox' : 'diet-food-detail');
  const renderLightboxClass = () => (showLightbox ? 'lightBox active' : 'lightBox');

  return (
    <>
      <ul
        className={renderClassDetail(!!lightBoxData.length)}
        role="menuitem"
        aria-label="Press SPACE Keyboard Key to open light box"
        tabIndex="0"
        onClick={openLightbox}
        onKeyDown={
          (e) => applyKeyboardNavigation(e, SPACE_KEY_CODE, () => openLightbox(e))
        }
      >
        {mealList}
      </ul>
      <div
        className={renderLightboxClass()}
        role="menuitem"
        aria-label="Press ESCAPE Keyboard Key to close light box"
        tabIndex="0"
        onClick={closeLightbox}
        onKeyDown={
          (e) => applyKeyboardNavigation(e, ESC_KEY_CODE, () => closeLightbox(e))
        }
      >
        <div
          className="lightBox-wrapper"
          role="menuitem"
          aria-label=""
          tabIndex="0"
          onClick={(e) => e.stopPropagation()}
          onKeyDown={
            (e) => applyKeyboardNavigation(e, '', () => {})
          }
        >
          <div className="lightBox-inner">
            <LightBox lightBoxData={lightBoxData} />
          </div>
        </div>
      </div>
    </>
  );
};

FoodList.propTypes = {
  meals: PropTypes.arrayOf(
    PropTypes.shape({
      food: PropTypes.string,
      qtty: PropTypes.any,
    })
  ),
  showLightbox: PropTypes.bool,
  openLightbox: PropTypes.func,
  closeLightbox: PropTypes.func,
};

FoodList.defaultProps = {
  meals: [],
  showLightbox: false,
  openLightbox: () => {},
  closeLightbox: () => {}
};
