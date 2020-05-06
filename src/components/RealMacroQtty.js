import React from "react";
import { getNewDietFood } from '../selectors/newDiet/getNewDietFood';
import { getRealQtty } from '../utils/getRealQtty';

export const RealMacroQtty = ({ food, meal, newDiet }) => {
  const newDietFoodQtty = getNewDietFood(newDiet, meal, food.code).qtty;
  const qtty = getRealQtty(food.eq, newDietFoodQtty);

  return (
    <span className="diet-title-macros">
      <span className="diet-title-macros-p">{Math.ceil(food.macros.p * qtty)}</span>
      <span className="diet-title-macros-ch">{Math.ceil(food.macros.ch * qtty)}</span>
      <span className="diet-title-macros-f">{Math.ceil(food.macros.f * qtty)}</span>
    </span>
  )
}
