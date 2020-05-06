import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { getRoundedKcal } from '../utils/getRoundedKcal';
import { getMacrosPecent } from '../utils/getMacrosPecent';
import { getRealQtty } from '../utils/getRealQtty';
import { Pie } from '../components/Pie';
import { getFoods } from "../selectors/foods/getFoods";

export const Foods = () => {
  const foods = useSelector(getFoods);
  const [ selectedFood, setSelectedFood ] = useState({});

  const  handleChange = (e) => {
    const grams = e.currentTarget.name;
    const value =  e.currentTarget.value;
    setSelectedFood(prevState => ({...prevState, [grams]: value  }));
  }

  const getUniQtty = (food) => {
    const qtty = food.eq ? 1 : 100;
    return selectedFood[food.code] || qtty;
  }

  const getRealKcalQtty = (food) => {
    let qtty = food.eq ? 1 : 100;
    qtty = getRealQtty(food.eq, selectedFood[food.code] || qtty);
    const macros = {p: food.macros.p * qtty, ch: food.macros.ch * qtty, f: food.macros.f * qtty};
    return getRoundedKcal(macros);
  }

  // <getRealMacroQtty />
  const getRealMacroQtty = (food) => {
    let qtty = food.eq ? 1 : 100;
    qtty = getRealQtty(food.eq, selectedFood[food.code] || qtty);

    return (
      <span className="diet-title-macros">
        <span className="diet-title-macros-p">{Math.ceil(food.macros.p * qtty)}</span>
        <span className="diet-title-macros-ch">{Math.ceil(food.macros.ch * qtty)}</span>
        <span className="diet-title-macros-f">{Math.ceil(food.macros.f * qtty)}</span>
      </span>
    )
  }

  return (
    <ul>
      { Object.values(foods)
        .filter(food => !!food.macros)
        .map(food => {
          const macrosPercent = getMacrosPecent(food.macros);

          return (
            <li key={food.desc} className="diet-item">
              <Pie p={macrosPercent.p} ch={macrosPercent.ch} f={macrosPercent.f} />
              <h3 className="diet-food-summary">{food.desc}</h3>
              <input className="foods-input" onChange={handleChange} type="number" name={food.code} value={getUniQtty(food)} />
              <span className="foods-qtty">{food.eq ? ' ' : 'g'}</span>
              {getRealMacroQtty(food)}
              <span className="foods-kcal">{getRealKcalQtty(food)} KCal</span>
            </li>
          )
        })
      }
    </ul>
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
