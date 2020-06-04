import { setGlobalError } from 'actions/globalErrors/setGlobalError';
import { removeGlobalError } from 'actions/globalErrors/removeGlobalError';
import { sendEmailVerification } from './sendEmailVerification';
import { updateUserProfile } from './updateUserProfile';

export const signUp = ({ email, password }) => (dispatch, getState, getFirebase) => {
  getFirebase().auth().createUserWithEmailAndPassword(email, password)
    .then(() => {
      const photoURL = `${process.env.PUBLIC_URL}/assets/images/default-avatar.jpg`;
      dispatch(sendEmailVerification());
      dispatch(updateUserProfile({ photoURL }));
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
