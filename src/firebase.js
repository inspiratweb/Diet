import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';

const config = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: `${process.env.REACT_APP_PROJECT_ID}.firebaseapp.com`,
  databaseURL: `https://${process.env.REACT_APP_PROJECT_ID}.firebaseio.com`,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: `${process.env.REACT_APP_PROJECT_ID}.appspot.com`,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appID: process.env.REACT_APP_APP_ID
};

export const fb = firebase.initializeApp(config);
export const reactReduxFirebaseConfig = {
    userProfile: 'users'
}

export const databaseRef = firebase.database().ref();
export const dietsRef = databaseRef.child('diets');
export const mealsRef = databaseRef.child('meals');
export const similarsRef = databaseRef.child('similars');
export const routerRef = databaseRef.child('router');
