import { combineReducers } from 'redux';
import { firebaseReducer as firebase } from 'react-redux-firebase';
import newDiet from './newDiet';
import selectedDiet from './selectedDiet';
import globalErrors from './globalErrors';

const dietApp = combineReducers({
  newDiet,
  firebase,
  selectedDiet,
  globalErrors
});

export default dietApp;
