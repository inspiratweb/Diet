// https://hackernoon.com/a-simple-pie-chart-in-svg-dbdd653b6936
import React from 'react';
import PropTypes from 'prop-types';
import { getCoordinatesForPercent } from 'utils/getCoordinatesForPercent';

export const Pie = ({ p, ch, f }) => {
  const slices = [
    { percent: p, color: '#EE0D6E' },
    { percent: ch, color: '#8457F7' },
    { percent: f, color: '#B0FF01' },
  ];

  let cumulativePercent = 0;

  return (
    <svg className="pie" viewBox="-1 -1 2 2">
      { slices.map((slice) => {
        // destructuring assignment sets the two variables at once
        const [startX, startY] = getCoordinatesForPercent(cumulativePercent);

        // each slice starts where the last slice ended, so keep a cumulative percent
        cumulativePercent += slice.percent;

        const [endX, endY] = getCoordinatesForPercent(cumulativePercent);

        // if the slice is more than 50%, take the large arc (the long way around)
        const largeArcFlag = slice.percent > 0.5 ? 1 : 0;

        // create an array and join it just for code readability
        const pathData = [
          `M ${startX} ${startY}`, // Move
          `A 1 1 0 ${largeArcFlag} 1 ${endX} ${endY}`, // Arc
          'L 0 0', // Line
        ].join(' ');

        return <path key={slice.color} d={pathData} fill={slice.color} />;
      })}
    </svg>
  );
};

Pie.propTypes = {
  p: PropTypes.number.isRequired,
  ch: PropTypes.number.isRequired,
  f: PropTypes.number.isRequired,
};
