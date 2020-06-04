import { getMacrosFromMeal } from 'utils/getMacrosFromMeal';

export const getTotalMacros = (
  meals = {},
  orderedDiet = {},
  foods = {}
) => (Object.entries(meals).length > 0 && Object.entries(orderedDiet)
  .reduce((total, meal) => {
    const mealMacros = getMacrosFromMeal(meal[1], foods);
    const { p = 0, ch = 0, f = 0 } = mealMacros;

    return {
      p: total.p + p,
      ch: total.ch + ch,
      f: total.f + f
    };
  }, { p: 0, ch: 0, f: 0 })) || { p: 0, ch: 0, f: 0 };
