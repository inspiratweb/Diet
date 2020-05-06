import { getTotalKcal } from "./getTotalKcal";
import { getKcalFromMacros } from "./getKcalFromMacros";

export const getMacrosPecent = (macros) => {
  const { p, ch, f } = getKcalFromMacros(macros);
  const totalKcal = getTotalKcal(macros);
  return {
    p: (p / totalKcal) || 0,
    ch: (ch / totalKcal) || 0,
    f: (f / totalKcal) || 0,
  };
};
