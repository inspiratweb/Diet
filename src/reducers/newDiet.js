import {
  ADD_DRAGGED_FOOD,
  REMOVE_DRAGGED_FOOD,
  CHANGE_FOOD_QUANTITY
} from 'actions/newDiet/action-types';

export default (state = {}, action) => {
  const {
    type, food, meal, foods, inputQtty
  } = action;
  switch (type) {
    case ADD_DRAGGED_FOOD: {
      const foodObj = Object.values(foods).find((f) => f.code === food);
      const qtty = foodObj.eq ? 1 : 100;
      let newPayload;
      if (state[meal]) {
        if (state[meal].some((f) => f.food === foodObj.code)) {
          return state;
        }
        newPayload = [...state[meal], { food: foodObj.code, qtty }];

      } else {
        newPayload = [{ food: foodObj.code, qtty }];
      }

      return {...state, [meal]: newPayload};
    }

    case REMOVE_DRAGGED_FOOD: {
      const newSlice = [...state[meal]];
      const filtedMeal = newSlice.filter((f) => f.food !== food.code);
      const filteredState = { ...state, [meal]: [...filtedMeal] };

      return filteredState;
    }

    case CHANGE_FOOD_QUANTITY: {
      const index = state[meal].findIndex((f) => f.food === food);
      const newSlice = [...state[meal]];
      newSlice[index].qtty = inputQtty;
      return { ...state, [meal]: newSlice };
    }

    default:
      return state;
  }
};
