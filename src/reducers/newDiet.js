export default (state = {}, action) => {
  const { type, food, meal } = action;
  switch (type) {
    case 'ADD_DRAGGED_FOOD':
      let newPayload;
      if (state[meal]) {
        if (state[meal].some(f => f.food === food)) {
          return state;
        } else {
          newPayload = [...state[meal], { food }];
        }
      } else {
        newPayload = [{ food }];
      }

      return {...state, [meal]: newPayload};
    default:
      return state;
  }
};
