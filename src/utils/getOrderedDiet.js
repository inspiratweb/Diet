export const getOrderedDiet = (diet, meals) => Object.entries(meals)
  .sort((a, b) => a[1].time - b[1].time)
  .map((meal) => meal[0])
  .reduce((o, key) => (diet[key] ? {...o, [key]: diet[key]} : {...o}), {});
