import { getKCalFromMacros } from 'utils/getKCalFromMacros';

export const getTotalKCal = (macros = {}) => {
  const { p = 0, ch = 0, f = 0 } = getKCalFromMacros(macros);
  return p + ch + f;
};
