const foods = (state = {}, action) => {
  const { type, payload } = action;
  switch (type) {
    case 'FETCH_FOODS':
      return {...state, ...payload};
    default:
      return state;
  }
};

export default foods;
