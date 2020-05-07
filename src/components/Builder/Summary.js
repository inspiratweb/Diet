import React from "react";
import { getMacrosFromMeal } from "../../selectors/meals/getMacrosFromMeal";
import { getRoundedKcal } from "../../utils/getRoundedKcal";

export const Summary = ({ newDiet, foods }) => {
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
