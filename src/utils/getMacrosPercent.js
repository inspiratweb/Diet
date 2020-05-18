import { getTotalKCal } from 'utils/getTotalKCal';
import { getKCalFromMacros } from 'utils/getKCalFromMacros';

export const getMacrosPercent = (macros = {}) => {
  const { p = 0, ch = 0, f = 0 } = getKCalFromMacros(macros);
  const totalKCal = getTotalKCal(macros) || 0;

  return {
    p: (p / totalKCal) || 0,
    ch: (ch / totalKCal) || 0,
    f: (f / totalKCal) || 0,
  };
};
