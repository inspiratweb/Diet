import React from 'react';
import PropTypes from 'prop-types';
import 'whatwg-fetch';

class Meal extends React.Component {
  constructor() {
    super();

    this.state = { meals: [] };
  }

  componentWillMount() {
    fetch('./data/meals.js')
      .then(response => response.json())
      .then((meals) => {
        this.setState({ meals });
      });
  }

  renderMeal() {
    const mealObj = this.state.meals.find(meal => meal.code === this.props.mealTime);
    return mealObj ? mealObj.desc : false;
  }

  render() {
    return <h3 className="diet-name">{this.renderMeal()}</h3>;
  }
}

Meal.propTypes = {
  mealTime: PropTypes.number
};

export default Meal;
