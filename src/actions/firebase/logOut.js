import { fb } from '../../firebase';

export const logOut = () => {
  fb.auth().signOut()
    .then(() => {
      // Sign-out successful.
    })
    .catch((error) => {
      // An error happened
    });
};
