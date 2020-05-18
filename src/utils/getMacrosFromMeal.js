import { getRealQtty } from 'utils/getRealQtty';

const getTotalMacros = (macros = {}, qtty = 0, eq = 0) => {
  const { p = 0, ch = 0, f = 0, } = macros;
  const total = getRealQtty(eq, qtty);

  return {
    p: p * total,
    ch: ch * total,
    f: f * total,
  };
};

export const getMacrosFromMeal = (
  meal = [],
  foods = {}
) => {
  const defaultMacros = { p: 0, ch: 0, f: 0 };

  return meal
    .map((m) => ({...foods[m.food], qtty: m.qtty}))
    .reduce((acc, val) => {
      const macros = val.macros ? getTotalMacros(val.macros, val.qtty, val.eq) : defaultMacros;
      return { p: acc.p + macros.p, ch: acc.ch + macros.ch, f: acc.f + macros.f };
    }, defaultMacros);
};
