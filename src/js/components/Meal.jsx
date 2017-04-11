import React from 'react';
import PropTypes from 'prop-types';

class Meal extends React.Component {
  constructor() {
    super();

    const breakfast = {code: 8, desc: 'Desayuno'};
    const lunch = {code: 11, desc: 'Almuerzo'};
    const dinner = {code: 14, desc: 'Comida'};
    const snack = {code: 17, desc: 'Merienda'};
    const postTraining = {code: 20, desc: 'Post entreno'};
    const supper = {code: 23, desc: 'Cena'};

    this.meals = [
      breakfast,
      lunch,
      dinner,
      snack,
      postTraining,
      supper
    ];
  }

  renderMeal() {
    return this.meals.map((meal) => {
      if (meal.code === this.props.mealTime) {
        return meal.desc;
      }
      return false;
    });
  }

  render() {
    return (
      <h3 className="listmeal-name">{this.renderMeal()}</h3>
    );
  }
}

Meal.propTypes = {
  mealTime: PropTypes.number
};

export default Meal;
