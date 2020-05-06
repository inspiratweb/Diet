import React from "react";
import { useSelector } from "react-redux";
import { getFoods } from "../selectors/foods/getFoods";

export const LightBox = ({ lightBoxData }) => {
  const foods = useSelector(getFoods);

  return lightBoxData && lightBoxData.map((d) => {
    const foodName = foods[d[0].food].desc;
    const skipGrams = foods[d[0].food].skipGrams;
    const foodQtty = d[0].qtty;

    return (
      <div className="lightBox-item">
        <p className="lightBox-item-title">{skipGrams ? `(${foodQtty}) ${foodName}` : `${foodName} ${foodQtty}g`}</p>
        <ul>
          {d[1].map((d) => {
            const foodName = foods[d.food].desc;
            const foodQtty = d.qtty;
            return <li className={!foodQtty ? 'lightBox-item-nodata' : ''}>{`${foodQtty} ${foodName}`}</li>;
          })}
        </ul>
      </div>
    );
  });
}
