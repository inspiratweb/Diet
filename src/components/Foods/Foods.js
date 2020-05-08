import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { getMacrosPecent } from '../../utils/getMacrosPecent';
import { getRealQtty } from '../../utils/getRealQtty';
import { Pie } from '../Common/Pie';
import { getFoods } from '../../selectors/foods/getFoods';
import { getRealKCalQtty } from '../../utils/getRealKCalQtty';
import { RealMacroQtty } from '../Common/RealMacroQtty';

export const Foods = () => {
  const foods = useSelector(getFoods);
  const [selectedFood, setSelectedFood] = useState({});

  const handleChange = (e) => {
    const grams = e.currentTarget.name;
    const { value } = e.currentTarget;
    setSelectedFood((prevState) => ({ ...prevState, [grams]: value }));
  };

  const getUniQtty = (food) => {
    const qtty = food.eq ? 1 : 100;
    return selectedFood[food.code] || qtty;
  };

  return (
    <ul>
      {Object.values(foods)
        .filter((food) => !!food.macros)
        .map((food) => {
          const macrosPercent = getMacrosPecent(food.macros);
          let qtty = food.eq ? 1 : 100;
          qtty = getRealQtty(food.eq, selectedFood[food.code] || qtty);

          return (
            <li key={food.desc} className="diet-item">
              <Pie p={macrosPercent.p} ch={macrosPercent.ch} f={macrosPercent.f} />
              <h3 className="diet-food-summary">{food.desc}</h3>
              <input className="foods-input" onChange={handleChange} type="number" name={food.code} value={getUniQtty(food)} />
              <span className="foods-qtty">{food.eq ? ' ' : 'g'}</span>
              <RealMacroQtty food={food} qtty={qtty} />
              <span className="foods-kcal">
                {getRealKCalQtty(food, qtty)}
                {' '}
                KCal
              </span>
            </li>
          );
        })}
    </ul>
  );
};

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
