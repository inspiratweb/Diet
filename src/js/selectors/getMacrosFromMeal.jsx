const getTotalKcal = (macros, qtty, eq) => {
  // eq is used to calc the proporcional qtty
  const realQtty = eq ? eq * qtty : qtty;
  const total = (realQtty / 100);
  return total * ((macros.p * 4) + (macros.ch * 4) + (macros.f * 9));
};

export default (meal, foods) => (
  meal
    .map(m => ({...foods[m.food], qtty: m.qtty}))
    .reduce((acc, val) =>
      acc + (val.macros ? getTotalKcal(val.macros, val.qtty, val.eq) : 0)
    , 0)
);
