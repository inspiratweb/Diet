import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import getMealFromId from '../selectors/getMealFromId.jsx';
import ListDietItem from '../components/ListDietItem.jsx';
import currentDiet from '../diets/2019-02.jsx';
import { fillDiet } from '../actions/index.jsx';

class Diet extends React.Component {
  componentWillMount() {
    this.props.actions.fillDiet(currentDiet);
  }

  renderMealsList() {
    const { diet, meals, foods } = this.props;

    return Object.entries(diet).map((meal) => {
      const mealName = getMealFromId(meal[0], meals).desc;

      return (
        <ListDietItem
          key={mealName}
          mealName={mealName}
          mealFoods={meal[1]}
          foods={foods}
        />
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
  actions: {
    fillDiet: PropTypes.func,
  },
  diet: PropTypes.arrayOf(
    PropTypes.arrayOf(
      PropTypes.number,
      PropTypes.string,
      PropTypes.any,
    )
  ),
  meals: PropTypes.shape({
    any: PropTypes.shape({
      time: PropTypes.number,
      desc: PropTypes.string,
    })
  }),
  foods: PropTypes.shape({
    any: PropTypes.shape({
      code: PropTypes.string,
      desc: PropTypes.string,
    })
  })
};

Diet.defaultProps = {
  diet: {},
  meals: {},
  foods: {}
};

const mapStateToProps = state => ({
  diet: state.diet,
  meals: state.meals,
  foods: state.foods,
});

const mapDispatchToProps = (dispatch) => {
  const actions = {
    fillDiet,
  };
  return { actions: bindActionCreators(actions, dispatch) };
};

export default connect(mapStateToProps, mapDispatchToProps)(Diet);
export { Diet as PureComponent };
