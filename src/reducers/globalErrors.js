import { SET_GLOBAL_ERROR, REMOVE_GLOBAL_ERROR } from '../actions/globalErrors/action-types';

export default (state = [], action = { type: '', payload: {}}) => {
  const { type, payload } = action;

  switch (type) {
    case SET_GLOBAL_ERROR: {
      const { message } = payload;

      const errorIdx = state.indexOf(message);

      if (errorIdx === -1) {
        return [...state, message];
      }
      return state;
    }

    case REMOVE_GLOBAL_ERROR: {
      const { message } = payload;

      const errorIdx = state.indexOf(message);
      if (errorIdx > -1) {
        const newState = [...state];
        newState.splice(errorIdx, 1);
        return newState;
      }
      return state;
    }

    default:
      return state;
  }
};
