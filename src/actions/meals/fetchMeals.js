import { mealsRef } from '../../firebase';
import { FETCH_MEALS } from "./action-types";

export const fetchMeals = () => async (dispatch) => {
  mealsRef.on('value', (snapshot) => {
    dispatch({
      type: FETCH_MEALS,
      payload: snapshot.val(),
    });
  });
};
