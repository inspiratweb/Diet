import { combineReducers } from 'redux';
import foods from './foods';
import meals from './meals';
import diet from './diet';
import newDiet from './newDiet';
import similars from './similars';
import router from './router';

const dietApp = combineReducers({
  foods,
  meals,
  diet,
  newDiet,
  similars,
  router,
});

export default dietApp;
