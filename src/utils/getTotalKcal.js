import { getKcalFromMacros } from "./getKcalFromMacros";

export const getTotalKcal = (macros) => {
  const kcalFromMacros = getKcalFromMacros(macros);
  return kcalFromMacros.p + kcalFromMacros.ch + kcalFromMacros.f;
};
