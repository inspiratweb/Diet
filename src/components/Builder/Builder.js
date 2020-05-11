import React from 'react';
import classNames from 'classnames';
import { useSelector } from 'react-redux';
import { getMacrosPecent } from '../../utils/getMacrosPecent';
import { ItemDraggable } from './ItemDraggable';
import search from '../../images/search.svg';
import toggler from '../../images/toggler.svg';
import { ItemDroppable } from './ItemDroppable';
import { BlankSlate } from '../Common/BlankSlate';
import { getFoods } from '../../selectors/foods/getFoods';
import { getMeals } from '../../selectors/meals/getMeals';
import { Summary } from './Summary';
import { F_KEY_CODE } from '../../consts/keyboard-key-codes';
import { applyKeyboardNavigation } from '../../utils/applyKeyboardNavigation';

export const Builder = () => {
  const foods = useSelector(getFoods);
  const meals = useSelector(getMeals);
  const codes = Object.values(foods).map((food) => food.code);

  const [filter, setFilter] = React.useState('');
  const [collapsed, setCollapsed] = React.useState(false);
  const [filterMacros, setFilterMacros] = React.useState({ p: false, ch: false, f: false });

  const handleChangeCheckbox = (e) => {
    const macro = e.currentTarget.id;
    setFilterMacros({...filterMacros, [macro]: !filterMacros[macro]});
  };

  const renderFoods = () => Object.values(foods)
    .filter((food) => !!food.macros)
    .filter((food) => food.desc.toLowerCase().indexOf(filter.toLowerCase()) >= 0)
    .filter((food) => {
      const macrosPercent = getMacrosPecent(food.macros);
      return (!filterMacros.p && !filterMacros.ch && !filterMacros.f)
          || (
            (filterMacros.p ? macrosPercent.p > 0.3 : true)
            && (filterMacros.ch ? macrosPercent.ch > 0.3 : true)
            && (filterMacros.f ? macrosPercent.f > 0.3 : true)
          );
    })
    .map((food) => {
      const macrosPercent = getMacrosPecent(food.macros);
      return <ItemDraggable key={food.code} macrosPercent={macrosPercent} food={food} />;
    });

  return (
    <div className={classNames('builder', { collapsed })}>
      <div className="builder-header">
        <h3 className="builder-header-title">
          Diet
          <p>Builder</p>
        </h3>
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
            <label htmlFor="p" className={classNames('checkbox-p', { active: filterMacros.p })}>
              <input checked={filterMacros.p} onChange={handleChangeCheckbox} className="builder-header-filter-checkbox" id="p" type="checkbox" />
            </label>
            <label htmlFor="ch" className={classNames('checkbox-ch', { active: filterMacros.ch })}>
              <input checked={filterMacros.ch} onChange={handleChangeCheckbox} className="builder-header-filter-checkbox" id="ch" type="checkbox" />
            </label>
            <label htmlFor="f" className={classNames('checkbox-f', { active: filterMacros.f })}>
              <input checked={filterMacros.f} onChange={handleChangeCheckbox} className="builder-header-filter-checkbox" id="f" type="checkbox" />
            </label>
          </div>
        </div>
      </div>
      <div className="builder-wrapper">
        <div className="builder-foods">
          <div className="diet-titleSimple">
            <span className="highlight">{renderFoods().length}</span>
            {' '}
            foods after filtering
          </div>
          {!renderFoods().length && <BlankSlate />}
          <ul>{renderFoods()}</ul>
        </div>
        <div className="builder-diet">
          <div className="builder-diet-toggler">
            <img
              role="switch"
              aria-checked={collapsed}
              aria-label="Press F Keyboard Key to expand or collapse the foods side tab"
              onClick={() => setCollapsed(!collapsed)}
              tabIndex="0"
              onKeyDown={
                (e) => applyKeyboardNavigation(e, F_KEY_CODE, () => setCollapsed(!collapsed))
              }
              alt="toggle menu"
              src={toggler}
              className="builder-diet-toggler-icon"
            />
          </div>
          <Summary />
          <ul className="builder-diet-list">
            { Object.values(meals).sort((a, b) => a.time - b.time).map((meal) => codes.length
                  && <ItemDroppable key={meal.desc} foodCodes={codes} meal={meal} />)}
          </ul>
        </div>
      </div>
    </div>
  );
};
