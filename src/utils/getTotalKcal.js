import { getKcalFromMacros } from "./getKcalFromMacros";

export const getTotalKcal = (macros) => {
  const { p, ch, f } = getKcalFromMacros(macros);
  return p + ch + f;
};
