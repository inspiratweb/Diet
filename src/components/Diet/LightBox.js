import React from 'react';
import { useSelector } from 'react-redux';
import { getFoods } from '../../selectors/foods/getFoods';

export const LightBox = ({ lightBoxData }) => {
  const foods = useSelector(getFoods);

  return lightBoxData && lightBoxData.map((data) => {
    const foodName = foods[data[0].food].desc;
    const {skipGrams} = foods[data[0].food];
    const foodQtty = data[0].qtty;

    return (
      <div key={foodName} className="lightBox-item">
        <p className="lightBox-item-title">{skipGrams ? `(${foodQtty}) ${foodName}` : `${foodName} ${foodQtty}g`}</p>
        <ul>
          {data[1].map((d) => {
            const food = foods[d.food].desc;
            const { qtty } = d;
            return (
              <li key={food} className={!qtty ? 'lightBox-item-nodata' : ''}>
                {`${qtty} ${food}`}
              </li>
            );
          })}
        </ul>
      </div>
    );
  });
};
