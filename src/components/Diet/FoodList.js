import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { getFoodFromId } from '../../selectors/foods/getFoodFromId';
import { getSimilarFoods } from '../../selectors/similars/getSimilarFoods';
import { getSimilars } from '../../selectors/similars/getSimilars';
import { getFoods } from '../../selectors/foods/getFoods';
import { Meal } from './Meal';
import { LightBox } from './LightBox';

export const FoodList = ({
  meals, showLightbox, openLightbox, closeLightbox
}) => {
  const foods = useSelector(getFoods);
  const similars = useSelector(getSimilars);
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
      <ul className={renderClassDetail(!!lightBoxData.length)} onClick={openLightbox}>{mealList}</ul>
      <div className={renderLightboxClass()} onClick={closeLightbox}>
        <div className="lightBox-wrapper" onClick={(e) => e.stopPropagation()}>
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
};

FoodList.defaultProps = {
  meals: []
};
