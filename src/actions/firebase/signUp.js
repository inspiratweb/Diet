import { fb } from '../../firebase';
import { setGlobalError } from '../globalErrors/setGlobalError';
import { removeGlobalError } from '../globalErrors/removeGlobalError';

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
