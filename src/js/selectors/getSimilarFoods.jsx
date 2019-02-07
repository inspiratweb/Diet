import getMacrosFromMeal from './getMacrosFromMeal.jsx';
import {getTotalKcal} from '../utils/index.jsx';


const getSimilarArray = (similars, meal) => {
  const similarArray = similars.find(similar =>
    similar.indexOf(meal.food) >= 0);

  const similarArrayCopy = similarArray && [...similarArray];
  return similarArrayCopy &&
    similarArrayCopy.splice(similarArrayCopy.indexOf(meal.food), 1) &&
    similarArrayCopy;
};

const getSimilarFoods = (meal, foods, similars) => {
  const similarArray = getSimilarArray(similars, meal);
  if (similarArray) {
    // Total kcal from the compared food
    const baseKcals = getTotalKcal(getMacrosFromMeal([meal], foods));
    return similarArray.map((similar) => {
      const foodKcalsPerGram = getTotalKcal(getMacrosFromMeal([{food: similar, qtty: 1}], foods));
      const diff = baseKcals / foodKcalsPerGram;
      return {food: similar, grams: Math.round(diff)};
    });
  }
  return false;
};

export default getSimilarFoods;
