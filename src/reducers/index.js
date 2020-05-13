import { combineReducers } from 'redux';
import { firebaseReducer as firebase } from 'react-redux-firebase';
import newDiet from './newDiet';
import selectedDiet from './selectedDiet';

const dietApp = combineReducers({
  newDiet,
  firebase,
  selectedDiet
});

export default dietApp;
