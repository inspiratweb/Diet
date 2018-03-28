import React from 'react';
import PropTypes from 'prop-types';
import Meal from './Meal.jsx';
import Food from './Food.jsx';

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
    if (touchEndX + 50 < this.state.touchStartX) {
      this.setState({ swipe: false });
    }

    if (touchEndX - 50 > this.state.touchStartX) {
      this.setState({ swipe: true });
    }
  }

  renderClass() {
    const initialClass = 'diet-item';
    return this.state.swipe ? `${initialClass} active` : initialClass;
  }

  render() {
    return (
      <li
        className={this.renderClass()}
        onClick={this.handleClick}
        onTouchStart={this.handleTouchStart}
        onTouchEnd={this.handleTouchEnd}
      >
        <Meal mealTime={this.props.mealTime} />
        <Food
          food={this.props.food}
          showDetail={this.state.visibleItem}
          tab="listitem"
        />
      </li>
    );
  }
}

ListDietItem.propTypes = {
  mealTime: PropTypes.number,
  food: PropTypes.array
};

export default ListDietItem;
