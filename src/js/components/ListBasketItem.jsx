import React from 'react';
import PropTypes from 'prop-types';
import Food from './Food.jsx';
import cookie from "react-cookie";

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

  componentDidMount() {
    // Checking basket cookie and load initial list
    if (cookie.load('basket') && cookie.load('basket').indexOf(this.props.food[0]) > -1) {
      this.setState({swipe: true});
    }
  }

  handleTouchStart(e) {
    this.setState({
      touchStartX: e.nativeEvent.changedTouches[0].clientX
    });
  }

  handleTouchEnd(e) {
    const initialClass = ''
    const touchEndX = e.nativeEvent.changedTouches[0].clientX;
    let tempBasket = cookie.load('basket') || [];

    // adding class on swipe
    if (touchEndX + 50 < this.state.touchStartX && this.state.swipe) {
      this.setState({swipe: false});

      // Removing this product from basket cookies
      tempBasket.splice(tempBasket.indexOf(this.props.food[0]), 1);
      this.setCookie(tempBasket);
    }

    if (touchEndX - 50 > this.state.touchStartX && !this.state.swipe) {
      this.setState({swipe: true});

      // Adding this product to basket cookies
      tempBasket.push(this.props.food[0]);
      this.setCookie(tempBasket);
    }
  }

  setCookie(newCookie) {
    let d = new Date();
    const minutes = 60 * 24 * 10;
    d.setTime(d.getTime() + (minutes * 60 * 1000));

    cookie.save('basket', newCookie, {path: '/', expires: d});
  };

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
