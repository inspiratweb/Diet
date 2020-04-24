import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getMacrosPecent } from '../utils';
import Pie from '../components/Pie';
import search from '../images/search.svg';
import toggler from '../images/toggler.svg';

class Foods extends React.Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);
    this.handleTogglerClick = this.handleTogglerClick.bind(this);

    this.state = {
      filter: '',
      collapsed: false
    };
  }

  handleChange(e) {
    this.setState({ filter: e.currentTarget.value });
  }

  handleTogglerClick() {
    this.setState({
      collapsed: !this.state.collapsed
    })
  }

  renderFoods() {
    const { foods } = this.props;
    return Object.values(foods)
    .filter(food => !!food.macros)
    .filter(food => food.desc.toLowerCase().indexOf(this.state.filter.toLowerCase()) >= 0)
    .map(food => {
        const macrosPercent = getMacrosPecent(food.macros);
        return (
          <li className="diet-item">
            <Pie p={macrosPercent.p} ch={macrosPercent.ch} f={macrosPercent.f} />
            <h3 className="diet-food-summary">{food.desc}</h3>
          </li>
        )
      })
  }

  renderMeals() {
    const { meals } = this.props;
    return Object.values(meals).map(meal =>
      <li>
        <h3>{meal.desc}</h3>
        <ul className="builder-diet-meals">
          <li>aa</li>
          <li>aa</li>
        </ul>
      </li>
    )
  }

  renderBuilderClassName() {
    let className = 'builder';
    return className += this.state.collapsed ? ' collapsed' : ''
  }

  render() {
    return (
      <div className={this.renderBuilderClassName()}>
        <div className="builder-header">
          <h3 className="builder-header-title">Diet builder</h3>
          <div className="builder-header-filter">
            <img src={search} className="builder-header-filter-icon" onClick={this.handleTogglerClick} />
            <input className="builder-header-filter-input" name="search" type="text" value={this.state.filter} placeholder="Search food" onChange={this.handleChange} />
          </div>
        </div>
        <div className="builder-wrapper">
          <ul className="builder-foods">{this.renderFoods()}</ul>
          <div className="builder-diet">
            <div className="builder-diet-toggler">
              <img src={toggler} className="builder-diet-toggler-icon" onClick={this.handleTogglerClick} />
            </div>
            <ul className="builder-diet-list">
              {this.renderMeals()}
            </ul>
          </div>
        </div>
      </div>
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
  meals: state.meals,
});

export default connect(mapStateToProps)(Foods);
export { Foods as PureComponent };
