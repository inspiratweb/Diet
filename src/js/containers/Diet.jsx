import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import getMealFromId from '../selectors/getMealFromId.jsx';
import ListDietItem from '../components/ListDietItem.jsx';
import currentDiet from '../diets/2019-02.jsx';
import { fillDiet } from '../actions/index.jsx';
import getMacrosFromMeal from '../selectors/getMacrosFromMeal.jsx';
import {getRoundedKcal} from '../utils/index.jsx';


class Diet extends React.Component {
  componentWillMount() {
    this.props.actions.fillDiet(currentDiet);
  }

  renderMealsList() {
    const { diet, meals, foods, similars } = this.props;
    let totalMacros = { p: 0, ch: 0, f: 0};

    const mealsList = Object.entries(diet).map((meal) => {
      const mealName = getMealFromId(meal[0], meals).desc;
      const mealMacros = getMacrosFromMeal(meal[1], foods);
      totalMacros = {
        p: totalMacros.p += mealMacros.p,
        ch: totalMacros.ch += mealMacros.ch,
        f: totalMacros.f += mealMacros.f
      };

      return (
        <ListDietItem
          key={mealName}
          mealName={mealName}
          mealFoods={meal[1]}
          foods={foods}
          macros={mealMacros}
          similars={similars}
        />
      );
    });

    return (
      <ul className={this.props.className}>
        <h3 className="diet-title">
          <span className="diet-title-kcal">{getRoundedKcal(totalMacros)}KCal</span>
          <span className="diet-title-macros">
            <span className="diet-title-macros-p">{Math.round(totalMacros.p)}g</span>
            <span className="diet-title-macros-ch">{Math.round(totalMacros.ch)}g</span>
            <span className="diet-title-macros-f">{Math.round(totalMacros.f)}g</span></span>
        </h3>
        {mealsList}
      </ul>
    );
  }

  render() {
    return this.renderMealsList();
  }
}

Diet.propTypes = {
  className: PropTypes.string.isRequired,
  actions: PropTypes.shape({
    fillDiet: PropTypes.func,
  }),
  diet: PropTypes.shape({
    any: PropTypes.arrayOf(
      PropTypes.number,
      PropTypes.any,
    )
  }),
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
  }),
  similars: PropTypes.arrayOf(
    PropTypes.arrayOf(
      PropTypes.string,
    )
  )
};

Diet.defaultProps = {
  diet: {},
  meals: {},
  foods: {},
  similars: {},
};

const mapStateToProps = state => ({
  diet: state.diet,
  meals: state.meals,
  foods: state.foods,
  similars: state.similars,
});

const mapDispatchToProps = (dispatch) => {
  const actions = {
    fillDiet,
  };
  return { actions: bindActionCreators(actions, dispatch) };
};

export default connect(mapStateToProps, mapDispatchToProps)(Diet);
export { Diet as PureComponent };
