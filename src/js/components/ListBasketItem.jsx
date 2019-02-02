import React from 'react';
import PropTypes from 'prop-types';
import cookie from 'react-cookie';

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
    if (
      cookie.load('basket') &&
      cookie.load('basket').indexOf(this.props.food.code) > -1
    ) {
      this.setState({ swipe: true });
    }
  }

  handleTouchStart(e) {
    this.setState({
      touchStartX: e.nativeEvent.changedTouches[0].clientX
    });
  }

  handleTouchEnd(e) {
    const touchEndX = e.nativeEvent.changedTouches[0].clientX;
    const tempBasket = cookie.load('basket') || [];

    // adding class on swipe
    if (touchEndX + 50 < this.state.touchStartX && this.state.swipe) {
      this.setState({ swipe: false });

      // Removing this product from basket cookies
      tempBasket.splice(tempBasket.indexOf(this.props.food.code), 1);
      this.setCookie(tempBasket);
    }

    if (touchEndX - 50 > this.state.touchStartX && !this.state.swipe) {
      this.setState({ swipe: true });

      // Adding this product to basket cookies
      tempBasket.push(this.props.food.code);
      this.setCookie(tempBasket);
    }
  }

  setCookie(newCookie) {
    const d = new Date();
    const minutes = 60 * 24 * 10;
    d.setTime(d.getTime() + minutes * 60 * 1000);

    cookie.save('basket', newCookie, { path: '/', expires: d });
  }

  renderClass() {
    let initialClass = 'basket-item';
    initialClass += this.props.food.notbuy ? ' basket-item-dontbuy' : '';
    initialClass += this.state.swipe ? ' active' : '';
    return initialClass;
  }

  render() {
    return (
      <li
        className={this.renderClass()}
        onTouchStart={this.handleTouchStart}
        onTouchEnd={this.handleTouchEnd}
      >
        {this.props.food.desc}
      </li>
    );
  }
}

ListBasketItem.propTypes = {
  food: PropTypes.shape({
    code: PropTypes.string,
    desc: PropTypes.string,
    notbuy: PropTypes.boolean,
    skiGrams: PropTypes.boolean,
    eq: PropTypes.number,
    macros: PropTypes.shape({
      p: PropTypes.number,
      ch: PropTypes.number,
      chs: PropTypes.number,
      f: PropTypes.number,
      fs: PropTypes.number,
    })
  })
};

export default ListBasketItem;
