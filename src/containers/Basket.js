import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ListBasketItem from '../components/ListBasketItem';

class Basket extends React.Component {
  renderMealsList() {
    const { diets, foods, router } = this.props;
    const diet = diets[router];

    const foodFromDiet = [...new Set(Object.values(diet)
      .reduce((a, b) =>
        [...a, ...b], []
      )
      .map(food => food.food)
    )];

    return Object.entries(foods).length > 0 && (
      foodFromDiet.map(ffd => (
        <ListBasketItem
          key={ffd}
          food={foods[ffd]}
        />
      ))
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
  diets: PropTypes.shape({
    any: PropTypes.arrayOf(
      PropTypes.number,
      PropTypes.any,
    )
  }),
  foods: PropTypes.shape({
    any: PropTypes.shape({
      code: PropTypes.string,
      desc: PropTypes.string,
    })
  }),
  router: PropTypes.string
};

Basket.defaultProps = {
  diets: {},
  foods: {},
  router: '',
};

const mapStateToProps = state => ({
  diets: state.diet,
  foods: state.foods,
  router: state.router,
});

export default connect(mapStateToProps)(Basket);
export { Basket as PureComponent };
