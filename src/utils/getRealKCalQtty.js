
import { getNewDietFood } from '../selectors/newDiet/getNewDietFood';
import { getRealQtty } from './getRealQtty';
import { getRoundedKcal } from './getRoundedKcal';

export const getRealKCalQtty = (food, meal, newDiet) => {
  const newDietFoodQtty = getNewDietFood(newDiet, meal, food.code).qtty;
  const qtty = getRealQtty(food.eq, newDietFoodQtty);
  const macros = { p: food.macros.p * qtty, ch: food.macros.ch * qtty, f: food.macros.f * qtty };
  return getRoundedKcal(macros);
}
