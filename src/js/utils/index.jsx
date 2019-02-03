const getTotalKcal = ({p, ch, f}) => (
  Math.ceil((p * 4) + (ch * 4) + (f * 9))
);

export {getTotalKcal};
