import { FETCH_SIMILARS } from '../actions/similars/action-types';

export default (state = [[]], action) => {
  const { type, payload } = action;
  switch (type) {
    case FETCH_SIMILARS:
      return payload;

    default:
      return state;
  }
};
