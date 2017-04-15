import React from 'react';
import PropTypes from 'prop-types';
import 'whatwg-fetch';

class Meal extends React.Component {
  constructor() {
    super();

    this.state = {meals: []};
  }

  componentWillMount() {
    fetch('../data/meals.js')
      .then((response) => {
        return response.json()
      })
      .then((meals) => {
        this.setState({ meals: meals })
      })
  }

  renderMeal() {
    return this.state.meals.map((meal) => {
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
