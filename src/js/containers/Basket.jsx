import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import getMealFromId from '../selectors/getMealFromId.jsx';
import ListDietItem from '../components/ListDietItem.jsx';

class Basket extends React.Component {
  renderMealsList() {
    const { diet, foods } = this.props;
    // debugger;

    // return Object.entries(foods).filter((food) => {
    //   return Object.entries(diet)
    //   food.code
    //   const mealName = getMealFromId(meal[0], meals).desc;

    //   return (
    //     <ListDietItem
    //       key={mealName}
    //       mealName={mealName}
    //       mealFoods={meal[1]}
    //       foods={foods}
    //     />
    //   );
    // });
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
