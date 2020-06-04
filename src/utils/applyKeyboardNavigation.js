const defaultEvent = { charCode: null, keyCode: null, preventDefault: () => {} };

export const applyKeyboardNavigation = (
  e = defaultEvent,
  keyCode = null,
  callback = () => {}
) => {
  if (e.charCode === keyCode || e.keyCode === keyCode) {
    e.preventDefault();
    callback();
  }
};
