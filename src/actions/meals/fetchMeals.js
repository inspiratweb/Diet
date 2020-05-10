import { mealsRef } from '../../firebase';

export const fetchMeals = () => async (dispatch) => {
  mealsRef.on('value', (snapshot) => {
    dispatch({
      type: 'FETCH_MEALS',
      payload: snapshot.val(),
    });
  });
};
