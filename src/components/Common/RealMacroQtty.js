import React from "react";

export const RealMacroQtty = ({ food, qtty }) => {
  return (
    <span className="diet-title-macros">
      <span className="diet-title-macros-p">{Math.ceil(food.macros.p * qtty)}</span>
      <span className="diet-title-macros-ch">{Math.ceil(food.macros.ch * qtty)}</span>
      <span className="diet-title-macros-f">{Math.ceil(food.macros.f * qtty)}</span>
    </span>
  )
}
