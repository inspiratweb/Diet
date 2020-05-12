import { combineReducers } from 'redux';
import { firebaseReducer as firebase } from 'react-redux-firebase';
import newDiet from './newDiet';

const dietApp = combineReducers({
  newDiet,
  firebase
});

export default dietApp;
