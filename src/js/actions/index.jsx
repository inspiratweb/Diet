import databaseRef from '../firebase.jsx';
import getOrderedDiet from '../selectors/getOrderedDiet.jsx';

// const fillDiet = payload => ({
//   type: 'FILL_DIET',
//   payload,
// });

const fetchDiet = meals => async (dispatch) => {
  databaseRef.on('value', (snapshot) => {
    dispatch({
      type: 'FETCH_DIET',
      payload: getOrderedDiet(snapshot.val(), meals)
    });
  });
};

// export { fillDiet, fetchDiet};
export {fetchDiet};
