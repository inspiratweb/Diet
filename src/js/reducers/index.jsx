import { combineReducers } from 'redux';
import foods from './foods.jsx';
import meals from './meals.jsx';
import diet from './diet.jsx';
import similars from './similars.jsx';
import router from './router.jsx';

const dietApp = combineReducers({
  foods,
  meals,
  diet,
  similars,
  router,
});

export default dietApp;
