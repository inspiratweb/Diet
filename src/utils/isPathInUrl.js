// Checks if the Page Url contains a parameter
export const isPathInUrl = (pathname = '', parameter = '') => {
  if (!parameter && !pathname) { return false; }
  return pathname.split('/').indexOf(parameter.substring(1, parameter.length)) > -1;
};
