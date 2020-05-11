import { FETCH_DIET } from '../actions/diet/action-types';

export default (state = {}, action) => {
  const { type, payload } = action;
  switch (type) {
    case FETCH_DIET:
      return { ...state, ...payload };

    default:
      return state;
  }
};
