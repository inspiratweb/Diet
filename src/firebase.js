import firebase from 'firebase/app';
import 'firebase/database';

const config = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appID: process.env.REACT_APP_APP_ID
};

firebase.initializeApp(config);

export const databaseRef = firebase.database().ref();
export const dietsRef = databaseRef.child('diets');
export const foodsRef = databaseRef.child('foods');
export const mealsRef = databaseRef.child('meals');
export const similarsRef = databaseRef.child('similars');
export const routerRef = databaseRef.child('router');
