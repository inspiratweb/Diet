export const getKCalFromMacros = (macros = {}) => {
  const { p = 0, ch = 0, f = 0 } = macros;

  return (
    {
      p: p * 4 || 0,
      ch: ch * 4 || 0,
      f: f * 9 || 0
    }
  );
};
