import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import getMealFromId from '../selectors/getMealFromId.jsx';
import getFoodFromId from '../selectors/getFoodFromId.jsx';

class Diet extends React.Component {
  renderFoodsList(meals) {
    const { foods } = this.props;

    return meals.map((meal) => {
      const mealName = getFoodFromId(meal.food, foods);

      return <li>{meal.qtty} {mealName.desc}</li>;
    });
  }

  renderMealsList() {
    const { diet, meals } = this.props;

    return Object.entries(diet).map((meal) => {
      const mealName = getMealFromId(meal[0], meals).desc;

      return (
        <li className="diet-item">
          <h3 className="diet-name">{mealName}</h3>
          <ul className="diet-food-detail">{this.renderFoodsList(meal[1])}</ul>
        </li>
      );
    });
  }

  render() {
    return (
      <ul className={this.props.className}>{this.renderMealsList()}</ul>
    );
  }
}

Diet.propTypes = {
  className: PropTypes.string.isRequired,
  meals: PropTypes.shape({
    any: PropTypes.shape({
      time: PropTypes.number,
      desc: PropTypes.string,
    })
  }),
  diet: PropTypes.shape({
    any: PropTypes.arrayOf(
      PropTypes.shape({
        food: PropTypes.string,
        qtty: PropTypes.number,
      })
    )
  }),
  foods: PropTypes.shape({
    any: PropTypes.shape({
      code: PropTypes.string,
      desc: PropTypes.string,
    })
  })
};

Diet.defaultProps = {
  meals: {},
  diet: {},
  foods: {},
};

const mapStateToProps = state => ({
  diet: state.diet,
  meals: state.meals,
  foods: state.foods,
});

export default connect(mapStateToProps)(Diet);
export { Diet as PureComponent };
