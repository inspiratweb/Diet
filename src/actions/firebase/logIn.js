import { fb } from '../../firebase';

export const logIn = ({ email, password }) => {
  fb.auth().signInWithEmailAndPassword(email, password)
    .then((user) => {
      console.log('Successfully Logged In', user);
    })
    .catch((err) => {
      console.log(`Error: ${err.toString()}`);
    });
};
