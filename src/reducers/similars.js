import { FETCH_SIMILARS } from '../actions/similars/action-types';
import { SET_INITIAL_STATE } from '../actions/common/action-types';

export default (state = [[]], action) => {
  const { type, payload } = action;
  switch (type) {
    case SET_INITIAL_STATE: {
      const { similars } = payload;

      return similars;
    }
    case FETCH_SIMILARS:
      return payload;

    default:
      return state;
  }
};
