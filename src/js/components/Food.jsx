import React from 'react';
import PropTypes from 'prop-types';

class Food extends React.Component {
  constructor() {
    super();

    this.state = {foods: []};
  }

  componentWillMount() {
    fetch('../data/foods.js')
      .then((response) => {
        return response.json()
      })
      .then((foods) => {
        this.setState({ foods: foods })
      })
  }

  renderFoodSummary() {
    const length = this.props.food.length;

    return this.props.food.map((food, i) => {
      if (i < length - 1) {
        return `${food.food}, `;
      }
      return food.food;
    });
  }

  renderFoodDetail() {
    return this.state.foods.map((food) => {
      return this.props.food.map((key) => {
        if (key.food === food.code) {
          return (<li>{key.qtty}g: {food.desc}</li>);
        }
        return false;
      })
      return false;
    });
  }

  renderBasketNames() {
    return this.state.foods.map((key) => {
      if (key.code === this.props.food[0]) {
        return key.notbuy ? <span className="basket-item-dontbuy">{key.desc}</span> : key.desc;
      }
      return false;
    });
  }

  renderItem() {
    if (this.props.tab === 'listitem') {
      if (this.props.showDetail) {
        return (
          <ul className="listmeal-food-detail">
            {this.renderFoodDetail()}
          </ul>
        );
      }
      return <p className="listmeal-food-summary">{this.renderFoodSummary()}</p>;
    } else if (this.props.tab === 'basket') {
      return this.renderBasketNames();
    }
  }

  render() {
    return (
      <div>
        {this.renderItem()}
      </div>
    );
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
