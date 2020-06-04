import { setGlobalError } from 'actions/globalErrors/setGlobalError';
import { removeGlobalError } from 'actions/globalErrors/removeGlobalError';
import { sendEmailVerification } from './sendEmailVerification';

export const updateEmail = (email) => (dispatch, getState, getFirebase) => {
  const user = getFirebase().auth().currentUser;

  user.updateEmail(email).then(() => {
    dispatch(sendEmailVerification(email));
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
