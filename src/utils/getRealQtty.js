export const getRealQtty = (eq = 0, qtty = 0) => {
  // eq is used to calc the proporcional qtty
  const realQtty = eq ? eq * qtty : qtty;
  return realQtty / 100;
};
