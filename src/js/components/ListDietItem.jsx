import React from 'react';
import PropTypes from 'prop-types';
import getFoodFromId from '../selectors/getFoodFromId.jsx';
import getSimilarFoods from '../selectors/getSimilarFoods.jsx';
import {getRoundedKcal, getMacrosPecent} from '../utils/index.jsx';
import Pie from './Pie.jsx';

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

  renderNoMacroClass(food) {
    return food.macros ? '' : 'diet-food-detail-empty';
  }

  renderFoodList(meals) {
    const { foods, similars } = this.props;

    return meals.map((meal) => {
      const mealName = getFoodFromId(meal.food, foods);
      const similarFoods = getSimilarFoods(meal, foods, similars);
      if (similarFoods) {
        // show popup here!
        console.log(meal);
        console.log(similarFoods);
      }

      return mealName.skipGrams
        ? (
          <li key={mealName.code}>
            <span className={this.renderNoMacroClass(mealName)}>({meal.qtty}) {mealName.desc}</span>
          </li>
        )
        : (
          <li key={mealName.code}>
            <span className={this.renderNoMacroClass(mealName)}>{meal.qtty}g: {mealName.desc}</span>
          </li>
        );

    });
  }

  renderFoodSummary(meals) {
    const { foods } = this.props;

    return meals.map((meal, i) => {
      const mealName = getFoodFromId(meal.food, foods);

      return i < meals.length - 1 ? `${mealName.code}, ` : mealName.code;
    });
  }

  renderMealTitle() {
    const { mealName, macros } = this.props;
    const kcal = getRoundedKcal(macros);
    return (
      <p className="diet-food-summary">
        {mealName}
        <span className="diet-food-cals">{`${kcal}KCal`}</span>
      </p>
    );
  }

  render() {
    const { mealFoods, macros } = this.props;
    const macrosPercent = getMacrosPecent(macros);

    return (
      <li
        className={this.renderClass()}
        onClick={this.handleClick}
        onTouchStart={this.handleTouchStart}
        onTouchEnd={this.handleTouchEnd}
      >
        <Pie p={macrosPercent.p} ch={macrosPercent.ch} f={macrosPercent.f} />
        <h3 className="diet-name">{this.renderMealTitle()}</h3>
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
      qtty: PropTypes.any,
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
  macros: PropTypes.shape({
    p: PropTypes.number,
    ch: PropTypes.number,
    f: PropTypes.number,
  }),
  similars: PropTypes.arrayOf(
    PropTypes.arrayOf(
      PropTypes.string,
    )
  )
};

export default ListDietItem;

