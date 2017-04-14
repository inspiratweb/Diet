import React from 'react';
import PropTypes from 'prop-types';
import Food from './Food.jsx';

class ListBasketItem extends React.Component {
  constructor() {
    super();

    this.state = {
      touchStartX: 0,
      swipe: false
    };

    this.handleTouchStart = this.handleTouchStart.bind(this);
    this.handleTouchEnd = this.handleTouchEnd.bind(this);
  }

  handleTouchStart(e) {
    this.setState({
      touchStartX: e.nativeEvent.changedTouches[0].clientX
    });
  }

  handleTouchEnd(e) {
    const initialClass = ''
    const touchEndX = e.nativeEvent.changedTouches[0].clientX;

    // adding class on swipe
    if (touchEndX + 50 < this.state.touchStartX) {
      this.setState({swipe: false});
    }

    if (touchEndX - 50 > this.state.touchStartX) {
      this.setState({swipe: true});
    }
  }

  renderClass() {
    const initialClass = 'basket-item';
    return this.state.swipe ? `${initialClass} active` : initialClass;
  }

  render() {
    return (
      <li className={this.renderClass()}
        onTouchStart={this.handleTouchStart}
        onTouchEnd={this.handleTouchEnd}>
        <Food
            food={this.props.food}
            tab='basket' />
      </li>
    )
  }
}

ListBasketItem.propTypes = {
  food: PropTypes.array
};

export default ListBasketItem;
