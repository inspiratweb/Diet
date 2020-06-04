import React from 'react';
import PropTypes from 'prop-types';
import { useDrag } from 'react-dnd';
import { Pie } from 'components/Common/Pie';
import { DragIcon } from 'components/Common/Icons/DragIcon';

export const ItemDraggable = ({ macrosPercent, food }) => {
  const [{ isDragging }, drag] = useDrag({
    item: { type: food.code },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  });

  return (
    <li className={isDragging ? 'diet-item dragging' : 'diet-item'}>
      <Pie p={macrosPercent.p} ch={macrosPercent.ch} f={macrosPercent.f} />
      <p className="diet-food-summary">{food.desc}</p>
      <DragIcon
        ref={drag}
        className="diet-food-summary-drag"
      />
    </li>
  );
};

ItemDraggable.propTypes = {
  macrosPercent: PropTypes.shape({
    p: PropTypes.number,
    ch: PropTypes.number,
    f: PropTypes.number
  }),
  food: PropTypes.shape({
    desc: PropTypes.string,
    code: PropTypes.string,
  })
};

ItemDraggable.defaultProps = {
  macrosPercent: {},
  food: {}
};
