import { setGlobalError } from 'actions/globalErrors/setGlobalError';
import { removeGlobalError } from 'actions/globalErrors/removeGlobalError';
import { fb } from 'firebaseConfig';

export const signUp = ({ email, password }) => (dispatch, getState) => {
  fb.auth().createUserWithEmailAndPassword(email, password)
    .then((user) => {
      console.log('Successfully Signed Up', user);
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
