import { setGlobalError } from 'actions/globalErrors/setGlobalError';
import { removeGlobalError } from 'actions/globalErrors/removeGlobalError';

export const logIn = ({ email, password }) => (dispatch, getState, getFirebase) => {
  getFirebase().auth().signInWithEmailAndPassword(email, password)
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
