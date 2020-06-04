// eslint-disable-next-line arrow-body-style
export const getIsUserLoggedIn = (state) => {
  return state.firebase.auth.isEmpty === false && state.firebase.auth.isLoaded === true;
};
