import { setGlobalError } from 'actions/globalErrors/setGlobalError';
import { removeGlobalError } from 'actions/globalErrors/removeGlobalError';

export const updateUserProfile = (values) => (dispatch, getState, getFirebase) => {
  getFirebase().updateProfile(values).then(() => {
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
