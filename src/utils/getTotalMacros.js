import { getMacrosFromMeal } from './getMacrosFromMeal';

export const getTotalMacros = (meals, orderedDiet, foods) => Object.entries(meals).length > 0
  && Object.entries(orderedDiet)
    .reduce((total, meal) => {
      const mealMacros = getMacrosFromMeal(meal[1], foods);
      return {
        p: total.p + mealMacros.p,
        ch: total.ch + mealMacros.ch,
        f: total.f + mealMacros.f
      };
    }, { p: 0, ch: 0, f: 0 });
