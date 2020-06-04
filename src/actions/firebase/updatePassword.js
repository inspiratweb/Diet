import { setGlobalError } from 'actions/globalErrors/setGlobalError';
import { removeGlobalError } from 'actions/globalErrors/removeGlobalError';

export const updatePassword = (
  { email, password, newPassword }
) => (dispatch, getState, getFirebase) => {
  getFirebase().auth().signInWithEmailAndPassword(email, password).then(() => {
    const user = getFirebase().auth().currentUser;
    user.updatePassword(newPassword).then(() => {
    // Update Password Successful.
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
