import { FETCH_FOODS } from '../actions/foods/action-types';

export default (state = {}, action) => {
  const { type, payload } = action;
  switch (type) {
    case FETCH_FOODS:
      return { ...state, ...payload };

    default:
      return state;
  }
};
