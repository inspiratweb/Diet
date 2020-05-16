import { getTotalKcal } from 'utils/getTotalKcal';

export const getRoundedKcal = (macros) => Math.ceil(getTotalKcal(macros));
