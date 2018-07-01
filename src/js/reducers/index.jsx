import { combineReducers } from 'redux';
import foods from './foods.jsx';
import meals from './meals.jsx';
import diet from './diet.jsx';

const dietApp = combineReducers({
  foods,
  meals,
  diet,
});

export default dietApp;
