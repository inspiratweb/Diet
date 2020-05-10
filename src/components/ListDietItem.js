import React from 'react';
import PropTypes from 'prop-types';
import { getFoodFromId } from '../selectors/foods/getFoodFromId';
import { getSimilarFoods } from '../selectors/similars/getSimilarFoods';
import { getRoundedKcal } from '../utils/getRoundedKcal';
import { getMacrosPecent } from '../utils/getMacrosPecent';
import Pie from './Pie';

class ListDietItem extends React.Component {
  constructor() {
    super();

    this.state = {
      visibleItem: false,
      touchStartX: 0,
      swipe: false,
      showLightbox: false
    };

    this.handleClick = this.handleClick.bind(this);
    this.handleTouchStart = this.handleTouchStart.bind(this);
    this.handleTouchEnd = this.handleTouchEnd.bind(this);
    this.openLightbox = this.openLightbox.bind(this);
    this.closeLightbox = this.closeLightbox.bind(this);
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

  openLightbox(e) {
    e.stopPropagation();
    this.setState({
      showLightbox: true
    });
  }

  closeLightbox(e) {
    e.stopPropagation();
    this.setState({
      showLightbox: false
    });
  }

  renderClass() {
    const initialClass = 'diet-item';
    return this.state.swipe ? `${initialClass} active` : initialClass;
  }

  renderNoMacroClass(food) {
    return food.macros ? '' : 'diet-food-detail-empty';
  }

  renderMeal(meal, mealName) {
    return (
      <li key={mealName.code}>
        <span className={this.renderNoMacroClass(mealName)}>
          {mealName.skipGrams ? `(${meal.qtty}) ${mealName.desc}` : `${meal.qtty}g: ${mealName.desc}`}
        </span>
      </li>
    );
  }

  renderLightBoxDetail(data) {
    return data.map((d) => {
      const foodName = this.props.foods[d.food].desc;
      const foodQtty = d.qtty;
      return <li className={!foodQtty ? 'lightBox-item-nodata' : ''}>{`${foodQtty} ${foodName}`}</li>;
    });
  }

  renderLightBox(data) {
    return data && data.map((d) => {
      const foodName = this.props.foods[d[0].food].desc;
      const skipGrams = this.props.foods[d[0].food].skipGrams;
      const foodQtty = d[0].qtty;
      return (
        <div className="lightBox-item">
          <p className="lightBox-item-title">{skipGrams ? `(${foodQtty}) ${foodName}` : `${foodName} ${foodQtty}g`}</p>
          <ul>{this.renderLightBoxDetail(d[1])}</ul>
        </div>
      );
    });
  }

  renderLightboxClass() {
    return this.state.showLightbox ? 'lightBox active' : 'lightBox';
  }

  renderClassDetail(lightbox) {
    return lightbox ? 'diet-food-detail withLightbox' : 'diet-food-detail';
  }

  renderFoodList(meals) {
    const { foods, similars } = this.props;
    const lightBoxData = [];

    const mealList = meals.map((meal) => {
      const mealName = getFoodFromId(meal.food, foods);
      const similarFoods = getSimilarFoods(meal, foods, similars);
      if (similarFoods) {
        lightBoxData.push([meal, similarFoods]);
      }
      return this.renderMeal(meal, mealName);
    });

    return (
      <React.Fragment>
        <ul className={this.renderClassDetail(!!lightBoxData.length)} onClick={this.openLightbox}>{mealList}</ul>
        <div className={this.renderLightboxClass()} onClick={this.closeLightbox}>
          <div className="lightBox-wrapper" onClick={e => e.stopPropagation()}>
            <div className="lightBox-inner">
              {this.renderLightBox(lightBoxData)}
            </div>
          </div>
        </div>
      </React.Fragment>
    );
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
            ? this.renderFoodList(mealFoods)
            : <p className="diet-food-summary">{this.renderFoodSummary(mealFoods)}</p>
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
