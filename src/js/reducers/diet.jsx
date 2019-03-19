export default (state = {}, action) => {
  const { type, payload } = action;
  switch (type) {
    // case 'FILL_DIET':
    //   return {...state, ...payload};
    case 'FETCH_DIET':
      return {...state, ...payload};
    default:
      return state;
  }
};
