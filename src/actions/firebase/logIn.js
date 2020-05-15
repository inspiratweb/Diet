import { fb } from '../../firebase';
import { setGlobalError } from '../globalErrors/setGlobalError';
import { removeGlobalError } from '../globalErrors/removeGlobalError';

export const logIn = ({ email, password }) => (dispatch, getState) => {
  fb.auth().signInWithEmailAndPassword(email, password)
    .then((user) => {
      console.log('Successfully Logged In', user);
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
