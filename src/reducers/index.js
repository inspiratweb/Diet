import { combineReducers } from 'redux';
import newDiet from './newDiet';
import { firebaseReducer as firebase } from "react-redux-firebase";

const dietApp = combineReducers({
  newDiet,
  firebase
});

export default dietApp;
