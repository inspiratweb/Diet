import { combineReducers } from 'redux';
import { firebaseReducer as firebase } from 'react-redux-firebase';
import globalErrors from 'reducers/globalErrors';
import newDiet from 'reducers/newDiet';
import selectedDiet from 'reducers/selectedDiet';

const dietApp = combineReducers({
  newDiet,
  firebase,
  selectedDiet,
  globalErrors
});

export default dietApp;
