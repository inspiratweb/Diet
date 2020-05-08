
import { getRoundedKcal } from './getRoundedKcal';

export const getRealKCalQtty = (food, qtty) => {
  const macros = { p: food.macros.p * qtty, ch: food.macros.ch * qtty, f: food.macros.f * qtty };
  return getRoundedKcal(macros);
};
