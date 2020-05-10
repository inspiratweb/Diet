import { getTotalKcal } from "./getTotalKcal";

export const getRoundedKcal = macros => Math.ceil(getTotalKcal(macros));
