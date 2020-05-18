/* eslint-disable no-return-assign */
import React from 'react';
import { useSelector } from 'react-redux';
import { getMacrosFromMeal } from 'utils/getMacrosFromMeal';
import { getRoundedKCal } from 'utils/getRoundedKCals';
import { getNewDiet } from 'selectors/newDiet/getNewDiet';
import { getFoodsFromFb } from 'selectors/firebase/getFoodsFromFb';

export const Summary = () => {
  const newDiet = useSelector(getNewDiet);
  const foods = useSelector(getFoodsFromFb);
  const totalMacros = (Object.values(newDiet).length
    && Object.values(newDiet).reduce((acc, val) => {
      const mealMacros = getMacrosFromMeal(val, foods);
      return {
        p: acc.p += Math.ceil(mealMacros.p),
        ch: acc.ch += Math.ceil(mealMacros.ch),
        f: acc.f += Math.ceil(mealMacros.f)
      };
    }, { p: 0, ch: 0, f: 0 })) || { p: 0, ch: 0, f: 0 };
  return (
    <h3 className="diet-titleSimple">
      <span className="diet-title-kcal highlight">
        {getRoundedKCal(totalMacros)}
        KCal
      </span>
      <span className="diet-title-macros">
        <span className="diet-title-macros-p">
          {Math.ceil(totalMacros.p)}
          g
        </span>
        <span className="diet-title-macros-ch">
          {Math.ceil(totalMacros.ch)}
          g
        </span>
        <span className="diet-title-macros-f">
          {Math.ceil(totalMacros.f)}
          g
        </span>
      </span>
    </h3>
  );
};
