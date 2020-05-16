import { SET_SELECTED_DIET } from 'actions/selectedDiet/action-types';

export default (state = {}, action) => {
  const { type, payload } = action;
  switch (type) {
    case SET_SELECTED_DIET: {
      return payload;
    }
    default:
      return state;
  }
};
