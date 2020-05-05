import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getMacrosPecent } from '../utils/getMacrosPecent';
import { getRoundedKcal } from '../utils/getRoundedKcal';
import Pie from '../components/Pie';
import search from '../images/search.svg';
import toggler from '../images/toggler.svg';
import dragIcon from '../images/drag.svg';
import { useDrag } from 'react-dnd';
import ItemDroppable from './ItemDroppable';
import BlankSlate from '../components/BlankSlate';
import { getMacrosFromMeal } from '../selectors/meals/getMacrosFromMeal';

const ItemDraggable = ({ macrosPercent, food }) => {
  const [{ isDragging }, drag] = useDrag({
    item: { type: food.code },
    collect: monitor => ({
      isDragging: !!monitor.isDragging(),
    }),
  });

  return (
    <li className={isDragging ? 'diet-item dragging' : 'diet-item'}>
      <Pie p={macrosPercent.p} ch={macrosPercent.ch} f={macrosPercent.f} />
      <p className="diet-food-summary">{food.desc}</p>
      <img alt="drag me!" ref={drag} src={dragIcon} className="diet-food-summary-drag" />
    </li>
  )
}

const Builder = ({ meals, foods, newDiet }) => {
  const codes = Object.values(foods).map(food => food.code);

  const [filter, setFilter] = React.useState('');
  const [collapsed, setCollapsed] = React.useState(false);
  const [filterMacros, setFilterMacros] = React.useState({ p: false, ch: false, f: false });

  const handleChangeCheckbox = (e) => {
    const macro = e.currentTarget.id;
    setFilterMacros({...filterMacros, [macro]: !filterMacros[macro]});
  }

  const renderFoods = () => {
    return Object.values(foods)
      .filter(food => !!food.macros)
      .filter(food => food.desc.toLowerCase().indexOf(filter.toLowerCase()) >= 0)
      .filter(food => {
        const macrosPercent = getMacrosPecent(food.macros);
        return (!filterMacros.p && !filterMacros.ch && !filterMacros.f)
          || (
            (filterMacros.p ? macrosPercent.p > 0.3 : true)
            && (filterMacros.ch ? macrosPercent.ch > 0.3 : true)
            && (filterMacros.f ? macrosPercent.f > 0.3 : true)
          );
      })
      .map(food => {
        const macrosPercent = getMacrosPecent(food.macros);
        return <ItemDraggable key={food.code} macrosPercent={macrosPercent} food={food} />
      })
  }

  const renderMeals = () => {
    return Object.values(meals)
      .sort((a, b) => a.time - b.time)
      .map(meal =>
        codes.length && <ItemDroppable key={meal.desc} foodCodes={codes} meal={meal} />
      )
  }

  const renderBuilderClassName = () => {
    let className = 'builder';
    return className += collapsed ? ' collapsed' : ''
  }

  const renderFilterResult = () =>
    <>
      <div className="diet-titleSimple"><span className="highlight">{renderFoods().length}</span> foods after filtering</div>
      {!renderFoods().length && <BlankSlate />}
    </>

  const renderSummary = () => {
    const totalMacros = Object.values(newDiet).length && Object.values(newDiet).reduce((acc, val) => {
      const mealMacros = getMacrosFromMeal(val, foods);
      return {
        p: acc.p += mealMacros.p,
        ch: acc.ch += mealMacros.ch,
        f: acc.f += mealMacros.f
      }
    }, { p: 0, ch: 0, f: 0 });
    return !!getRoundedKcal(totalMacros) && (
      <h3 className="diet-titleSimple">
        <span className="diet-title-kcal highlight">{getRoundedKcal(totalMacros)}KCal</span>
        <span className="diet-title-macros">
          <span className="diet-title-macros-p">{Math.round(totalMacros.p)}g</span>
          <span className="diet-title-macros-ch">{Math.round(totalMacros.ch)}g</span>
          <span className="diet-title-macros-f">{Math.round(totalMacros.f)}g</span></span>
      </h3>
    );
  }

  return (
    <div className={renderBuilderClassName()}>
      <div className="builder-header">
        <h3 className="builder-header-title">Diet<p>Builder</p></h3>
        <div className="builder-header-filter">
          <div>
            <img alt="search" src={search} className="builder-header-filter-icon" />
            <input
              className="builder-header-filter-input"
              name="search"
              type="text"
              value={filter}
              placeholder="Search food..."
              onChange={(e) => setFilter(e.currentTarget.value)}
            />
          </div>
          <div>
            <input checked={filterMacros.p} onChange={handleChangeCheckbox} className="builder-header-filter-checkbox" id="p" type="checkbox" />
            <label htmlFor="p" className="checkbox-p" />
            <input checked={filterMacros.ch} onChange={handleChangeCheckbox} className="builder-header-filter-checkbox" id="ch" type="checkbox" />
            <label htmlFor="ch" className="checkbox-ch" />
            <input checked={filterMacros.f} onChange={handleChangeCheckbox} className="builder-header-filter-checkbox" id="f" type="checkbox" />
            <label htmlFor="f" className="checkbox-f" />
          </div>
        </div>
      </div>
      <div className="builder-wrapper">
        <div className="builder-foods">
          {renderFilterResult()}
          <ul>{renderFoods()}</ul>
        </div>
        <div className="builder-diet">
          <div className="builder-diet-toggler">
            <img
              alt="toggle menu"
              src={toggler}
              className="builder-diet-toggler-icon"
              onClick={() => setCollapsed(!collapsed)}
              />
          </div>
          {renderSummary()}
          <ul className="builder-diet-list">
            {renderMeals()}
          </ul>
        </div>
      </div>
    </div>
  );
}

Builder.propTypes = {
  foods: PropTypes.shape({
    any: PropTypes.shape({
      code: PropTypes.string,
      desc: PropTypes.string,
    })
  }),
};

Builder.defaultProps = {
  foods: {},
};

const mapStateToProps = state => ({
  foods: state.foods,
  meals: state.meals,
  newDiet: state.newDiet,
});

export default connect(mapStateToProps)(Builder);
export { Builder as PureComponent };
