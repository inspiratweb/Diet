export const applyKeyboardNavigation = (e, keyCode, callback) => {
  if (e.charCode === keyCode || e.keyCode === keyCode) {
    e.preventDefault();
    callback();
  }
};
