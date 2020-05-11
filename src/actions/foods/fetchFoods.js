import { foodsRef } from '../../firebase';
import { FETCH_FOODS } from "./action-types";

export const fetchFoods = () => async (dispatch) => {
  foodsRef.on('value', (snapshot) => {
    dispatch({
      type: FETCH_FOODS,
      payload: snapshot.val(),
    });
  });
};
