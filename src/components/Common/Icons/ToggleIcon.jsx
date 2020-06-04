import React from 'react';
import PropTypes from 'prop-types';

export const ToggleIcon = ({
  className, color, onClick, onKeyDown, ariaLabel, ariaChecked
}) => (
  <svg
    className={className}
    role="switch"
    aria-checked={ariaChecked}
    tabIndex="0"
    arial-label={ariaLabel}
    onClick={onClick}
    onKeyDown={onKeyDown}
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="20"
  >
    <g id="Page-1">
      <path
        id="Rectangle"
        fill={color}
        fillRule="evenodd"
        d="M2.11.34L15.16 8.8c.48.31.61.95.3 1.42-.07.11-.16.21-.27.28L2.14 19.57c-.46.33-1.11.21-1.43-.25-.12-.17-.19-.38-.19-.59L.51 1.2C.51.63.97.17 1.54.17c.2 0 .4.06.57.17z"
      />
    </g>
  </svg>

);

ToggleIcon.propTypes = {
  className: PropTypes.string,
  color: PropTypes.string,
  onClick: PropTypes.func,
  onKeyDown: PropTypes.func,
  ariaLabel: PropTypes.string,
  ariaChecked: PropTypes.bool
};

ToggleIcon.defaultProps = {
  className: '',
  ariaLabel: '',
  color: '#64FFDA',
  onClick: () => {},
  onKeyDown: () => {},
  ariaChecked: false
};
