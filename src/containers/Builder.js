import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getMacrosPecent } from '../utils';
import Pie from '../components/Pie';
import search from '../images/search.svg';
import toggler from '../images/toggler.svg';

const Foods = ({ meals, foods }) => {
  const [filter, setFilter] = React.useState('');
  const [collapsed, setCollapsed] = React.useState(false);

  const renderFoods = () => {
    return Object.values(foods)
    .filter(food => !!food.macros)
    .filter(food => food.desc.toLowerCase().indexOf(filter.toLowerCase()) >= 0)
    .map(food => {
        const macrosPercent = getMacrosPecent(food.macros);
        return (
          <li className="diet-item">
            <Pie p={macrosPercent.p} ch={macrosPercent.ch} f={macrosPercent.f} />
            <p className="diet-food-summary">{food.desc}</p>
          </li>
        )
      })
  }

  const renderMeals = () => {
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

  const renderBuilderClassName = () => {
    let className = 'builder';
    return className += collapsed ? ' collapsed' : ''
  }

  return (
    <div className={renderBuilderClassName()}>
      <div className="builder-header">
        <h3 className="builder-header-title">Diet builder</h3>
        <div className="builder-header-filter">
          <img src={search} className="builder-header-filter-icon" />
          <input
            className="builder-header-filter-input"
            name="search"
            type="text"
            value={filter}
            placeholder="Search food"
            onChange={(e) => setFilter(e.currentTarget.value)}
          />
        </div>
      </div>
      <div className="builder-wrapper">
        <ul className="builder-foods">{renderFoods()}</ul>
        <div className="builder-diet">
          <div className="builder-diet-toggler">
            <img
              src={toggler}
              className="builder-diet-toggler-icon"
              onClick={() => setCollapsed(!collapsed)}
            />
          </div>
          <ul className="builder-diet-list">
            {renderMeals()}
          </ul>
        </div>
      </div>
    </div>
  );
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
