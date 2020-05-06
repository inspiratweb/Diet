import React from "react";

export const Meal = ({ meal, mealName }) => {
  return (
    <li key={mealName.code}>
      <span className={!mealName.macros && 'diet-food-detail-empty'}>
        {mealName.skipGrams ? `(${meal.qtty}) ${mealName.desc}` : `${meal.qtty}g: ${mealName.desc}`}
      </span>
    </li>
  );
}
