import { FETCH_MEALS } from '../actions/meals/action-types';

export default (state = {}, action) => {
  const { type, payload } = action;
  switch (type) {
    case FETCH_MEALS:
      return { ...state, ...payload };

    default:
      return state;
  }
};
