import { similarsRef } from '../../firebase';

export const fetchSimilars = () => async (dispatch) => {
  similarsRef.on('value', (snapshot) => {
    dispatch({
      type: 'FETCH_SIMILARS',
      payload: snapshot.val(),
    });
  });
};
