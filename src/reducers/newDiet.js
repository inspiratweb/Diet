export default (state = {}, action) => {
  const { type, food, meal, foods, inputQtty } = action;
  switch (type) {
    case 'ADD_DRAGGED_FOOD':
      const foodObj = Object.values(foods).find(f => f.code === food);
      const qtty = foodObj.eq ? 1 : 100;
      let newPayload;
      if (state[meal]) {
        if (state[meal].some(f => f.food === foodObj.code)) {
          return state;
        } else {
          newPayload = [...state[meal], { food: foodObj.code, qtty }];
        }
      } else {
        newPayload = [{ food: foodObj.code, qtty }];
      }

      return {...state, [meal]: newPayload};

    case 'REMOVE_DRAGGED_FOOD':
      const filtedMeal = state[meal].filter(f => f.food !== food.code);
      const filteredState = { ...state, [meal]: [...filtedMeal] };

      return filteredState;

    case 'CHANGE_FOOD_QUANTITY':
      const index = state[meal].findIndex((f) => f.food === food);
      const newSlice = [...state[meal]];
      newSlice[index].qtty = inputQtty;
      return {...state, [meal]: newSlice}
    default:
      return state;
  }
};
