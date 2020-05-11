import { similarsRef } from '../../firebase';
import { FETCH_SIMILARS } from "./action-types"

export const fetchSimilars = () => async (dispatch) => {
  similarsRef.on('value', (snapshot) => {
    dispatch({
      type: FETCH_SIMILARS,
      payload: snapshot.val(),
    });
  });
};
