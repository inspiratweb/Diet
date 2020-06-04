import { removeGlobalError } from 'actions/globalErrors/removeGlobalError';
import { setGlobalError } from 'actions/globalErrors/setGlobalError';

export const sendEmailVerification = () => (dispatch, getState, getFirebase) => {
  const user = getFirebase().auth().currentUser;

  user.sendEmailVerification().then(() => {
    // TODO: Dispatch an action when the email is sent;
  }).catch(
    (error) => {
      dispatch(setGlobalError(error));

      setTimeout(() => {
        const { globalErrors } = getState();
        const { message } = error;

        if (globalErrors.indexOf(message) > -1) {
          dispatch(removeGlobalError(error));
        }
      }, 6000);
    }
  );
};
