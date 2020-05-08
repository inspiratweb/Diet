import { foodsRef } from '../../firebase';

export const fetchFoods = () => async (dispatch) => {
  foodsRef.on('value', (snapshot) => {
    dispatch({
      type: 'FETCH_FOODS',
      payload: snapshot.val(),
    });
  });
};
