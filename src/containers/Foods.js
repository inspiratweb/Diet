import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getRoundedKcal } from '../utils/getRoundedKcal';
import { getMacrosPecent } from '../utils/getMacrosPecent';
import { getRealQtty } from '../utils/getRealQtty';
import Pie from '../components/Pie';

class Foods extends React.Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);

    this.state = {};
  }

  handleChange(e) {
    const grams = e.currentTarget.name;
    this.setState({ [grams]: e.currentTarget.value });
  }

  getUniQtty(food) {
    const qtty = food.eq ? 1 : 100;
    return this.state[food.code] || qtty;
  }

  getRealKcalQtty(food) {
    let qtty = food.eq ? 1 : 100;
    qtty = getRealQtty(food.eq, this.state[food.code] || qtty);
    const macros = {p: food.macros.p * qtty, ch: food.macros.ch * qtty, f: food.macros.f * qtty};
    return getRoundedKcal(macros);
  }

  getRealMacroQtty(food) {
    let qtty = food.eq ? 1 : 100;
    qtty = getRealQtty(food.eq, this.state[food.code] || qtty);

    return (
      <span className="diet-title-macros">
        <span className="diet-title-macros-p">{Math.ceil(food.macros.p * qtty)}</span>
        <span className="diet-title-macros-ch">{Math.ceil(food.macros.ch * qtty)}</span>
        <span className="diet-title-macros-f">{Math.ceil(food.macros.f * qtty)}</span>
      </span>
    )
  }

  getGramsosUnits(food) {
    return food.eq ? ' ' : 'g';
  }

  renderFoods() {
    const { foods } = this.props;
    return Object.values(foods)
    .filter(food => !!food.macros)
    .map(food => {
        const macrosPercent = getMacrosPecent(food.macros);
        return (
          <li className="diet-item">
            <Pie p={macrosPercent.p} ch={macrosPercent.ch} f={macrosPercent.f} />
            <h3 className="diet-food-summary">{food.desc}</h3>
            <input className="foods-input" onChange={this.handleChange} type="number" name={food.code} value={this.getUniQtty(food)} />
            <span className="foods-qtty">{this.getGramsosUnits(food)}</span>
            {this.getRealMacroQtty(food)}
            <span className="foods-kcal">{this.getRealKcalQtty(food)} KCal</span>
          </li>
        )
      })
  }

  render() {
    return (
      <ul>{this.renderFoods()}</ul>
    );
  }
}

Foods.propTypes = {
  foods: PropTypes.shape({
    any: PropTypes.shape({
      code: PropTypes.string,
      desc: PropTypes.string,
    })
  }),
};

Foods.defaultProps = {
  foods: {},
};

const mapStateToProps = state => ({
  foods: state.foods,
});

export default connect(mapStateToProps)(Foods);
export { Foods as PureComponent };
