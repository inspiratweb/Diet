import React from 'react';
import PropTypes from 'prop-types';

export const DragIcon = React.forwardRef(({
  // eslint-disable-next-line react/prop-types
  className, width, height
}, ref) => (
  <svg
    ref={ref}
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
  >
    <g fill="#212121" fillRule="evenodd">
      <circle cx="5" cy="2" r="2.1" />
      <circle cx="11" cy="2" r="2.1" />
      <circle cx="5" cy="8" r="2.1" />
      <circle cx="11" cy="8" r="2.1" />
      <circle cx="5" cy="14" r="2.1" />
      <circle cx="11" cy="14" r="2.1" />
    </g>
  </svg>
));

DragIcon.propTypes = {
  className: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
};

DragIcon.defaultProps = {
  className: '',
  width: '13.3',
  height: '21.3'
};
