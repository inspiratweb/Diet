import getMacrosFromMeal from './getMacrosFromMeal';
import {getTotalKcal} from '../utils/index';


const getSimilarArray = (similars, meal) => {
  const similarArray = similars.find(similar =>
    similar.indexOf(meal.food) >= 0);

  const similarArrayCopy = similarArray && [...similarArray];
  return similarArrayCopy &&
    similarArrayCopy.splice(similarArrayCopy.indexOf(meal.food), 1) &&
    similarArrayCopy;
};

const getSkipGrams = (foods, food) => Object.values(foods).find(f => f.code === food).skipGrams;

const getSimilarFoods = (meal, foods, similars) => {
  const similarArray = getSimilarArray(similars, meal);
  if (similarArray) {
    // Total kcal from the compared food
    const baseKcals = getTotalKcal(getMacrosFromMeal([meal], foods));
    return similarArray.map((similar) => {
      let diff = '';
      const skipGrams = getSkipGrams(foods, similar);
      const foodKcalsPerGram = getTotalKcal(getMacrosFromMeal([{food: similar, qtty: 1}], foods));
      if (foodKcalsPerGram) {
        const qtty = Math.round(baseKcals / foodKcalsPerGram);
        diff = skipGrams ? `(${qtty})` : `${qtty}g:`;
      }
      return {food: similar, qtty: diff};
    });
  }
  return false;
};

export default getSimilarFoods;
