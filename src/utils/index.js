const getKcalFromMacros = ({p, ch, f}) => (
  {
    p: p * 4,
    ch: ch * 4,
    f: f * 9
  }
);

const getTotalKcal = (macros) => {
  const kcalFromMacros = getKcalFromMacros(macros);
  return kcalFromMacros.p + kcalFromMacros.ch + kcalFromMacros.f;
};

const getRoundedKcal = macros => Math.ceil(getTotalKcal(macros));

const getMacrosPecent = (macros) => {
  const kcals = getKcalFromMacros(macros);
  const totalKcal = getTotalKcal(macros);
  return {
    p: (kcals.p / totalKcal) || 0,
    ch: (kcals.ch / totalKcal) || 0,
    f: (kcals.f / totalKcal) || 0,
  };
};

const getRealQtty = (eq, qtty) => {
  // eq is used to calc the proporcional qtty
  const realQtty = eq ? eq * qtty : qtty;
  return realQtty / 100;
}

export {getTotalKcal, getMacrosPecent, getRoundedKcal, getRealQtty};
