import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { useDrop } from 'react-dnd';
import { addDraggedFood, removeDraggedFood, changeFoodQuantity } from '../actions/index';
import getFoodFromId from '../selectors/getFoodFromId';
import getNewDietFood from '../selectors/getNewDietFood';
import { getRoundedKcal, getMacrosPecent, getRealQtty } from '../utils';
import Pie from '../components/Pie';

const ItemDroppable = ({ foodCodes, foods, meal, actions, newDiet }) => {
  const [{ isOver, canDrop }, drop] = useDrop({
    accept: foodCodes,
    drop: (food) => {
      actions.addDraggedFood(food.type, meal.desc, foods);
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  });

  const handleChange = (e, food, meal) => {
    actions.changeFoodQuantity(food, meal, e.currentTarget.value);
  }

  const removeFood = (food, meal) => {
    actions.removeDraggedFood(food, meal);
  }

  const getFoodQtty = (food, meal) => {
    return getNewDietFood(newDiet, meal, food).qtty;
  }

  const getRealKcalQtty = (food, meal) => {
    const newDietFoodQtty = getNewDietFood(newDiet, meal, food.code).qtty;
    const qtty = getRealQtty(food.eq, newDietFoodQtty);
    const macros = {p: food.macros.p * qtty, ch: food.macros.ch * qtty, f: food.macros.f * qtty};
    return getRoundedKcal(macros);
  }

  const getRealMacroQtty = (food, meal) => {
    const newDietFoodQtty = getNewDietFood(newDiet, meal, food.code).qtty;
    const qtty = getRealQtty(food.eq, newDietFoodQtty);

    return (
      <span className="diet-title-macros">
        <span className="diet-title-macros-p">{Math.ceil(food.macros.p * qtty)}</span>
        <span className="diet-title-macros-ch">{Math.ceil(food.macros.ch * qtty)}</span>
        <span className="diet-title-macros-f">{Math.ceil(food.macros.f * qtty)}</span>
      </span>
    )
  }

  const getGramsOrUnits = (food) => {
    return food.eq ? ' ' : 'g';
  }

  const renderFoodByMeal = (mealName) => {
    return newDiet[mealName]
      ? newDiet[mealName].map(meal => {
        const food = getFoodFromId(meal.food, foods);
        const macrosPercent = getMacrosPecent(food.macros);
        return (
          <li key={food} className="diet-item">
            <div className="diet-item-data">
              <Pie p={macrosPercent.p} ch={macrosPercent.ch} f={macrosPercent.f} />
              <h3 className="diet-food-summary">{food.desc}</h3>
              <input className="foods-input" onChange={(e) => handleChange(e, food.code, mealName)} type="number" name={food.code} value={getFoodQtty(food.code, mealName)} />
              <span className="foods-qtty">{getGramsOrUnits(food)}</span>
              {getRealMacroQtty(food, mealName)}
              <span className="foods-kcal">{getRealKcalQtty(food, mealName)} KCal</span>
            </div>
            <div onClick={() => removeFood(food, mealName, foods)} className="diet-item-cross">X</div>
          </li>
        )
      })
      : <li className="empty">Empty (drop foods here)</li>
  }

  const renderClassname = () => {
    let className = 'builder-diet-meals';
    className += isOver ? ' isOver' : '';
    className += canDrop ? ' canDrop' : '';
    return className;
  }

  return (
    <li>
      <h3>{meal.desc}</h3>
      <ul ref={drop} className={renderClassname()}>
        {renderFoodByMeal(meal.desc)}
      </ul>
    </li>
 );
}
const mapStateToProps = state => ({
  newDiet: state.newDiet,
  foods: state.foods,
});

const mapDispatchToProps = (dispatch) => {
  const actions = {
    addDraggedFood,
    removeDraggedFood,
    changeFoodQuantity,
  };
  return { actions: bindActionCreators(actions, dispatch) };
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemDroppable);
