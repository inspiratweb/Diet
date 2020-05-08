export const getRealQtty = (eq, qtty) => {
  // eq is used to calc the proporcional qtty
  const realQtty = eq ? eq * qtty : qtty;
  return realQtty / 100;
}
