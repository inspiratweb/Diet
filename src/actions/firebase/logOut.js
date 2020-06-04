import { setGlobalError } from 'actions/globalErrors/setGlobalError';
import { removeGlobalError } from 'actions/globalErrors/removeGlobalError';

export const logOut = () => (dispatch, getState, getFirebase) => {
  getFirebase().auth().signOut()
    .then(() => {
      // Sign-out successful.
    })
    .catch((error) => {
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
