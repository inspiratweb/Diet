import { routerRef } from '../../firebase';

export const fetchRouter = () => async (dispatch) => {
  routerRef.on('value', (snapshot) => {
    dispatch({
      type: 'FETCH_ROUTER',
      payload: snapshot.val(),
    });
  });
};
