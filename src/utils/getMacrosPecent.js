import { getTotalKcal } from "./getTotalKcal";
import { getKcalFromMacros } from "./getKcalFromMacros";

export const getMacrosPecent = (macros) => {
  const kcals = getKcalFromMacros(macros);
  const totalKcal = getTotalKcal(macros);
  return {
    p: (kcals.p / totalKcal) || 0,
    ch: (kcals.ch / totalKcal) || 0,
    f: (kcals.f / totalKcal) || 0,
  };
};
