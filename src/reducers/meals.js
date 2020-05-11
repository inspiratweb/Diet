const meals = (state = {}, action) => {
  const { type, payload } = action;
  switch (type) {
    case 'FETCH_MEALS':
      return { ...state, ...payload };

    default:
      return state;
  }
};

export default meals;
