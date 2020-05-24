import { fb } from 'firebaseConfig';
import { setGlobalError } from 'actions/globalErrors/setGlobalError';
import { removeGlobalError } from 'actions/globalErrors/removeGlobalError';

export const updateUserProfile = (
  { displayName, photoURL }
) => (dispatch, getState) => {
  const user = fb.auth().currentUser;

  user.updateProfile({
    displayName,
    photoURL
  }).then(() => {
    // TODO: Dispatch action to notify the Global State the data was updated
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
