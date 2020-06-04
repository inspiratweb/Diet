import { setGlobalError } from 'actions/globalErrors/setGlobalError';
import { removeGlobalError } from 'actions/globalErrors/removeGlobalError';
import { getUserIdFromFb } from 'selectors/firebase/auth/getUserIdFromFb';
import { updateUserProfile } from './updateUserProfile';

export const uploadUserProfilePicture = (picture) => (dispatch, getState, getFirebase) => {
  const storage = getFirebase().storage().ref();
  const userId = getUserIdFromFb(getState());

  storage.child(`users/avatars/${userId}/userPhotoUrl`).put(picture)
    .then((snapshot) => {
      snapshot.ref.getDownloadURL().then((photoURL) => {
        dispatch(updateUserProfile({ photoURL }));
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
