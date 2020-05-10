import { FETCH_FOODS } from '../actions/foods/action-types';
import { SET_INITIAL_STATE } from '../actions/common/action-types';

export default (state = {}, action) => {
  const { type, payload } = action;

  switch (type) {
    case SET_INITIAL_STATE: {
      const { foods } = payload;

      return { ...state, ...foods };
    }
    case FETCH_FOODS: {
      return { ...state, ...payload };
    }
    default:
      return state;
  }
};
