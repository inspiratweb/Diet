import React from 'react';
import PropTypes from 'prop-types';
import getFoodFromId from '../selectors/getFoodFromId.jsx';


class ListDietItem extends React.Component {
  constructor() {
    super();

    this.state = {
      visibleItem: false,
      touchStartX: 0,
      swipe: false
    };

    this.handleClick = this.handleClick.bind(this);
    this.handleTouchStart = this.handleTouchStart.bind(this);
    this.handleTouchEnd = this.handleTouchEnd.bind(this);
  }

  handleClick() {
    this.setState({ visibleItem: !this.state.visibleItem });
  }

  handleTouchStart(e) {
    this.setState({
      touchStartX: e.nativeEvent.changedTouches[0].clientX
    });
  }

  handleTouchEnd(e) {
    const touchEndX = e.nativeEvent.changedTouches[0].clientX;

    // adding class on swipe
    if (touchEndX + 90 < this.state.touchStartX) {
      this.setState({ swipe: false });
    }

    if (touchEndX - 90 > this.state.touchStartX) {
      this.setState({ swipe: true });
    }
  }

  renderClass() {
    const initialClass = 'diet-item';
    return this.state.swipe ? `${initialClass} active` : initialClass;
  }

  renderFoodList(meals) {
    const { foods } = this.props;

    return meals.map((meal) => {
      const mealName = getFoodFromId(meal.food, foods);

      return mealName.skipGrams
        ? <li key={mealName.code}>({meal.qtty}) {mealName.desc}</li>
        : <li key={mealName.code}>{meal.qtty}g: {mealName.desc}</li>;

    });
  }

  renderFoodSummary(meals) {
    const { foods } = this.props;

    return meals.map((meal, i) => {
      const mealName = getFoodFromId(meal.food, foods);

      return i < meals.length - 1 ? `${mealName.code}, ` : mealName.code;
    });

  }

  render() {
    const { mealName, mealFoods } = this.props;

    return (
      <li
        className={this.renderClass()}
        onClick={this.handleClick}
        onTouchStart={this.handleTouchStart}
        onTouchEnd={this.handleTouchEnd}
      >
        <h3 className="diet-name">{mealName}</h3>
        {
          this.state.visibleItem
            ? <ul className="diet-food-detail">{this.renderFoodList(mealFoods)}</ul>
            : <div><p className="diet-food-summary">{this.renderFoodSummary(mealFoods)}</p></div>
        }
      </li>
    );
  }
}

ListDietItem.propTypes = {
  mealName: PropTypes.string,
  mealFoods: PropTypes.arrayOf(
    PropTypes.shape({
      food: PropTypes.string,
      qtty: PropTypes.number,
    })
  ),
  foods: PropTypes.shape({
    any: PropTypes.shape({
      code: PropTypes.string,
      desc: PropTypes.string,
      notbuy: PropTypes.bool,
      skipGrams: PropTypes.bool,
    }),
  }),
};

export default ListDietItem;
