import { fb } from '../../firebase';
import { setGlobalError } from '../globalErrors/setGlobalError';
import { removeGlobalError } from '../globalErrors/removeGlobalError';

export const resetPassword = (email) => (dispatch, getState) => {
  fb.auth().sendPasswordResetEmail(email)
    .then(() => {
    // TODO: Add tracking event;
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
