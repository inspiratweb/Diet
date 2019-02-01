import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import getMealFromId from '../selectors/getMealFromId.jsx';
import ListBasketItem from '../components/ListBasketItem.jsx';

class Basket extends React.Component {
  renderMealsList() {
    const { diet, foods } = this.props;

    const foodFromDiet = [...new Set(Object.values(diet)
      .reduce((a, b) =>
        [...a, ...b], []
      )
      .map(food => food.food)
    )];

    return (
      foodFromDiet.map(ffd =>
        <ListBasketItem
          food={foods[ffd]}
        />
      )
    );
  }

  render() {
    return (
      <ul className={this.props.className}>{this.renderMealsList()}</ul>
    );
  }
}

Basket.propTypes = {
  className: PropTypes.string.isRequired,
  diet: PropTypes.arrayOf(
    PropTypes.arrayOf(
      PropTypes.number,
      PropTypes.string,
      PropTypes.any,
    )
  ),
  foods: PropTypes.shape({
    any: PropTypes.shape({
      code: PropTypes.string,
      desc: PropTypes.string,
    })
  })
};

Basket.defaultProps = {
  diet: {},
  foods: {}
};

const mapStateToProps = state => ({
  diet: state.diet,
  foods: state.foods,
});

export default connect(mapStateToProps)(Basket);
export { Basket as PureComponent };
