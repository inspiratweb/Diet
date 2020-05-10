import { fb } from '../../firebase';

export const signUp = ({ email, password }) => {
  fb.auth().createUserWithEmailAndPassword(email, password)
    .then((u) => {
      console.log('Successfully Signed Up');
    })
    .catch((err) => {
      console.log(`Error: ${err.toString()}`);
      // dispatch(throwSignInError(`Error: ${err.toString()}`));
    });
};
