import React from "react";
import { Pie } from "../Common/Pie";
import { useDrag } from "react-dnd";
import dragIcon from '../../images/drag.svg';

export const ItemDraggable = ({ macrosPercent, food }) => {
  const [{ isDragging }, drag] = useDrag({
    item: { type: food.code },
    collect: monitor => ({
      isDragging: !!monitor.isDragging(),
    }),
  });

  return (
    <li className={isDragging ? 'diet-item dragging' : 'diet-item'}>
      <Pie p={macrosPercent.p} ch={macrosPercent.ch} f={macrosPercent.f} />
      <p className="diet-food-summary">{food.desc}</p>
      <img alt="drag me!" ref={drag} src={dragIcon} className="diet-food-summary-drag" />
    </li>
  )
}
