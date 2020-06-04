import { getMacrosFromMeal } from 'utils/getMacrosFromMeal';
import { getTotalKCal } from 'utils/getTotalKCal';

const getSimilarArray = (similars = [], meal = {}) => {
  const similarArray = similars.find((similar) => similar.indexOf(meal.food) >= 0);

  const similarArrayCopy = similarArray && [...similarArray];
  return similarArrayCopy
    && similarArrayCopy.splice(similarArrayCopy.indexOf(meal.food), 1)
    && similarArrayCopy;
};

const getSkipGrams = (foods, food) => Object.values(foods).find((f) => f.code === food).skipGrams;

export const getSimilarFoods = (meal = {}, foods = {}, similars = []) => {
  const similarArray = getSimilarArray(similars, meal);

  if (similarArray) {
    // Total kcal from the compared food
    const baseKcals = getTotalKCal(getMacrosFromMeal([meal], foods));

    return similarArray.map((similar) => {
      let diff = '';
      const skipGrams = getSkipGrams(foods, similar);
      const foodKCalsPerGram = getTotalKCal(getMacrosFromMeal([{food: similar, qtty: 1}], foods));

      if (foodKCalsPerGram) {
        const qtty = Math.ceil(baseKcals / foodKCalsPerGram);
        diff = skipGrams ? `(${qtty})` : `${qtty}g:`;
      }
      return { food: similar, qtty: diff };
    });
  }
  return false;
};
