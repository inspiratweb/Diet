import { routerRef } from '../../firebase';
import { FETCH_ROUTER } from './action-types';

export const fetchRouter = () => async (dispatch) => {
  routerRef.on('value', (snapshot) => {
    dispatch({
      type: FETCH_ROUTER,
      payload: snapshot.val(),
    });
  });
};
