import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { useDrop } from 'react-dnd';
import { addDraggedFood } from '../actions/index';
import getFoodFromId from '../selectors/getFoodFromId';

const ItemDroppable = ({ foodCodes, foods, meal, actions, newDiet }) => {
  const [{ isOver, canDrop }, drop] = useDrop({
    accept: foodCodes,
    drop: (food) => {
      actions.addDraggedFood(food.type, meal.desc);
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  });

  const renderFoodByMeal = (meal) => {
    return newDiet[meal]
      ? newDiet[meal].map(meal => {
        const food = getFoodFromId(meal.food, foods);
        return <li>{food.desc}</li>
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
  };
  return { actions: bindActionCreators(actions, dispatch) };
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemDroppable);
