import * as firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyDE9qAg1ZD06osjek54O-z2Sy5a2f03tQk',
  authDomain: 'diet-46765.firebaseapp.com',
  databaseURL: 'https://diet-46765.firebaseio.com',
  projectId: 'diet-46765',
  storageBucket: 'diet-46765.appspot.com',
  messagingSenderId: '687261601505'
};

firebase.initializeApp(config);
export default firebase.database().ref();
// export const dietRef = databaseRef.child('diet');
