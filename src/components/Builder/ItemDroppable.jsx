import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { useDrop } from 'react-dnd';
import { RealMacroQtty } from 'components/Common/RealMacroQtty';
import { getRealKCalQtty } from 'utils/getRealKCalQtty';
import { getRealQtty } from 'utils/getRealQtty';
import { R_KEY_CODE } from 'consts/keyboard-key-codes';
import { applyKeyboardNavigation } from 'utils/applyKeyboardNavigation';
import { getFoodsFromFb } from 'selectors/firebase/data/getFoodsFromFb';
import { Pie } from 'components/Common/Pie';
import { getMacrosPercent } from 'utils/getMacrosPercent';
import { addDraggedFood } from 'actions/newDiet/addDraggedFood';
import { removeDraggedFood } from 'actions/newDiet/removeDraggedFood';
import { changeFoodQuantity } from 'actions/newDiet/changeFoodCuantity';
import { getFoodFromId } from 'utils/getFoodFromId';
import { getNewDietFood } from 'utils/getNewDietFood';
import { getNewDiet } from 'selectors/newDiet/getNewDiet';
import { RemoveIcon } from 'components/Common/Icons/RemoveIcon';

export const ItemDroppable = ({ foodCodes, meal }) => {
  const dispatch = useDispatch();
  const newDiet = useSelector(getNewDiet);
  const foods = useSelector(getFoodsFromFb);
  const mealName = meal.desc;

  const [{ isOver, canDrop }, drop] = useDrop({
    accept: foodCodes,
    drop: (food) => {
      dispatch(addDraggedFood(food.type, mealName, foods));
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  });

  const handleChange = (e, food, newDietMeal) => {
    dispatch(changeFoodQuantity(food, newDietMeal, e.currentTarget.value));
  };

  const removeFood = (food, newDietMeal) => {
    dispatch(removeDraggedFood(food, newDietMeal));
  };

  return (
    <li>
      <h3>{mealName}</h3>
      <ul ref={drop} className={classNames('builder-diet-meals', { isOver, canDrop })}>
        {newDiet[mealName] && newDiet[mealName].length
          ? newDiet[mealName].map((newDietMeal) => {
            const food = getFoodFromId(newDietMeal.food, foods);
            const { p, ch, f } = getMacrosPercent(food.macros);
            const newDietFoodQtty = getNewDietFood(newDiet, mealName, food.code).qtty;
            const qtty = getRealQtty(food.eq, newDietFoodQtty);

            return (
              <li key={`${mealName}-${food.desc}`} className="diet-item">
                <div className="diet-item-data">
                  <Pie p={p} ch={ch} f={f} />
                  <h3 className="diet-food-summary">{food.desc}</h3>
                  <input
                    className="foods-input"
                    onChange={(e) => handleChange(e, food.code, mealName)}
                    type="number"
                    name={food.code}
                    value={getNewDietFood(newDiet, mealName, food.code).qtty}
                  />
                  <span className="foods-qtty">{food.eq ? ' ' : 'g'}</span>
                  <RealMacroQtty food={food} qtty={qtty} />
                  <span className="foods-kcal">
                    {getRealKCalQtty(food, qtty)}
                    &nbsp;KCal
                  </span>
                </div>
                <RemoveIcon
                  ariaLabel="Press R Keyboard Key to remove food from your diet"
                  className="diet-item-cross"
                  onClick={() => removeFood(food, mealName)}
                  onKeyDown={
                    (e) => applyKeyboardNavigation(e, R_KEY_CODE, () => removeFood(food, mealName))
                  }
                />
              </li>
            );
          })
          : <li className="empty">Empty (drop foods here)</li>}
      </ul>
    </li>
  );
};

ItemDroppable.propTypes = {
  foodCodes: PropTypes.arrayOf(PropTypes.string),
  meal: PropTypes.shape({
    time: PropTypes.number,
    desc: PropTypes.string,
  })
};

ItemDroppable.defaultProps = {
  foodCodes: [],
  meal: {}
};
