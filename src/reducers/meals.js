import { FETCH_MEALS } from '../actions/meals/action-types';
import { SET_INITIAL_STATE } from '../actions/common/action-types';

export default (state = {}, action) => {
  const { type, payload } = action;
  switch (type) {
    case SET_INITIAL_STATE: {
      const { meals } = payload;

      return { ...state, ...meals };
    }
    case FETCH_MEALS: {
      return { ...state, ...payload };
    }
    default:
      return state;
  }
};
