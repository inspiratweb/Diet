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
export const databaseRef = firebase.database().ref();
export const dietsRef = databaseRef.child('diets');
export const foodsRef = databaseRef.child('foods');
export const mealsRef = databaseRef.child('meals');
export const similarsRef = databaseRef.child('similars');
export const dietRef = dietsRef.child('3200');
