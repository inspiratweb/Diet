import { getTotalKCal } from 'utils/getTotalKCals';

export const getRoundedKCal = (macros = {}) => Math.ceil(getTotalKCal(macros)) || 0;
