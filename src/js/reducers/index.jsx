import { combineReducers } from 'redux';
import foods from './foods.jsx';
// import languages from './languages';

const dietApp = combineReducers({
  foods,
});

export default dietApp;
