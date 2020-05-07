import React from 'react';
import classNames from "classnames";
import { useDispatch, useSelector } from 'react-redux';
import { useDrop } from 'react-dnd';
import { addDraggedFood } from '../actions/newDiet/addDraggedFood';
import { removeDraggedFood } from '../actions/newDiet/removeDraggedFood';
import { changeFoodQuantity } from '../actions/newDiet/changeFoodCuantity';
import { getFoodFromId } from '../selectors/foods/getFoodFromId';
import { getNewDietFood } from '../selectors/newDiet/getNewDietFood';
import { getNewDiet } from '../selectors/newDiet/getNewDiet';
import { getFoods } from '../selectors/foods/getFoods';
import { getMacrosPecent } from '../utils/getMacrosPecent';
import { Pie } from '../components/Pie';
import removeIcon from '../images/remove.svg';
import { RealMacroQtty } from '../components/RealMacroQtty';
import { getRealKCalQtty } from '../utils/getRealKCalQtty';
import { getRealQtty } from '../utils/getRealQtty';

export const ItemDroppable = ({ foodCodes, meal }) => {
  const dispatch = useDispatch();
  const newDiet = useSelector(getNewDiet);
  const foods = useSelector(getFoods);
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

  const handleChange = (e, food, meal) => {
    dispatch(changeFoodQuantity(food, meal, e.currentTarget.value));
  }

  const removeFood = (food, meal) => {
    dispatch(removeDraggedFood(food, meal));
  }

  return (
    <li>
      <h3>{mealName}</h3>
      <ul ref={drop} className={classNames('builder-diet-meals', { isOver, canDrop })}>
        {newDiet[mealName] && newDiet[mealName].length
      ? newDiet[mealName].map(meal => {
        const food = getFoodFromId(meal.food, foods);
        const { p, ch, f } = getMacrosPecent(food.macros);
        const newDietFoodQtty = getNewDietFood(newDiet, mealName, food.code).qtty;
        const qtty = getRealQtty(food.eq, newDietFoodQtty);

        return (
          <li key={`${mealName}-${food.desc}`} className="diet-item">
            <div className="diet-item-data">
              <Pie p={p} ch={ch} f={f} />
              <h3 className="diet-food-summary">{food.desc}</h3>
              <input className="foods-input" onChange={(e) => handleChange(e, food.code, mealName)} type="number" name={food.code} value={getNewDietFood(newDiet, mealName, food.code).qtty} />
              <span className="foods-qtty">{food.eq ? ' ' : 'g'}</span>
              <RealMacroQtty food={food} qtty={qtty} />
              <span className="foods-kcal">{getRealKCalQtty(food, qtty)} KCal</span>
            </div>
            <img
               className="diet-item-cross"
               alt={`remove ${food} from ${mealName} icon`}
               src={removeIcon}
               onClick={() => removeFood(food, mealName)}
            />
          </li>
        )
      })
      : <li className="empty">Empty (drop foods here)</li>}
      </ul>
    </li>
 );
}
