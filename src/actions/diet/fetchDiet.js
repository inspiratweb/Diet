import { dietsRef } from '../../firebase';
import { FETCH_DIET } from './action-types';

export const fetchDiet = () => async (dispatch) => {
  dietsRef.on('value', (snapshot) => {
    dispatch({
      type: FETCH_DIET,
      payload: snapshot.val(),
    });
  });
};
