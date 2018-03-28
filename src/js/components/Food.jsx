import React from 'react';
import PropTypes from 'prop-types';
import 'whatwg-fetch';

class Food extends React.Component {
  constructor() {
    super();

    this.state = { foods: [] };
  }

  componentWillMount() {
    fetch('./data/foods.js')
      .then(response => response.json())
      .then((foods) => {
        this.setState({ foods });
      });
  }

  renderFoodSummary() {
    return this.props.food.reduce(
      (acc, cur, i) =>
        i < this.props.food.length - 1
          ? `${acc}${cur.food}, `
          : `${acc}${cur.food}`,
      ''
    );
  }

  renderFoodDetail() {
    return this.props.food.map((meal) => {
      const meals = this.state.foods.find(food => meal.food === food.code);
      return meals.skipGrams ? (
        <li>
          ({meal.qtty}) {meals.desc}
        </li>
      ) : (
        <li>
          {meal.qtty}g: {meals.desc}
        </li>
      );
    });
  }

  renderBasketNames() {
    return this.state.foods.map((food) => {
      if (food.code === this.props.food[0]) {
        return food.notbuy ? (
          <span className="basket-item-dontbuy">{food.desc}</span>
        ) : (
          food.desc
        );
      }
      return false;
    });
  }

  renderItem() {
    if (this.props.tab === 'listitem') {
      return this.props.showDetail ? (
        <ul className="diet-food-detail">{this.renderFoodDetail()}</ul>
      ) : (
        <p className="diet-food-summary">{this.renderFoodSummary()}</p>
      );
    } else if (this.props.tab === 'basket') {
      return this.renderBasketNames();
    }
    return false;
  }

  render() {
    return <div>{this.renderItem()}</div>;
  }
}

Food.propTypes = {
  food: PropTypes.array,
  showDetail: PropTypes.bool,
  tab: PropTypes.string
};

Food.defaultProps = {
  showDetail: false
};

export default Food;
