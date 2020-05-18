import { getTotalKCal } from 'utils/getTotalKCal';

export const getRoundedKCal = (macros = {}) => Math.ceil(getTotalKCal(macros)) || 0;
