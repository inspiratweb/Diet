import { setGlobalError } from 'actions/globalErrors/setGlobalError';
import { removeGlobalError } from 'actions/globalErrors/removeGlobalError';
import { logOut } from './logOut';

export const deleteAccount = () => (dispatch, getState, getFirebase) => {
  const user = getFirebase().auth().currentUser;

  user.delete().then(() => {
    dispatch(logOut());
  }).catch((error) => {
    dispatch(setGlobalError(error));

    setTimeout(() => {
      const { globalErrors } = getState();
      const { message } = error;

      if (globalErrors.indexOf(message) > -1) {
        dispatch(removeGlobalError(error));
      }
    }, 6000);
  });
};
