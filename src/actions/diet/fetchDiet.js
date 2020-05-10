import { dietsRef } from '../../firebase';

export const fetchDiet = () => async (dispatch) => {
  dietsRef.on('value', (snapshot) => {
    dispatch({
      type: 'FETCH_DIET',
      payload: snapshot.val(),
    });
  });
};
