import { getRoundedKCal } from 'utils/getRoundedKCals';

export const getRealKCalQtty = (food = { macros: {}}, qtty = 0) => {
  const { p = 0, ch = 0, f = 0 } = food.macros;
  const macros = { p: p * qtty, ch: ch * qtty, f: f * qtty };

  return getRoundedKCal(macros);
};
