import React from 'react';
import PropTypes from 'prop-types';

export const RemoveIcon = ({
  className, color, onClick, onKeyDown, ariaLabel
}) => (
  <div
    className={className}
    role="button"
    tabIndex="0"
    arial-label={ariaLabel}
    onClick={onClick}
    onKeyDown={onKeyDown}
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="12"
      height="12"
    >
      <path
        id="Layer"
        fill={color}
        fillRule="evenodd"
        d="M.35.35c.47-.47 1.23-.47 1.7 0L6 4.3 9.95.35a1.201 1.201 0 111.7 1.7L7.7 6l3.95 3.95a1.201 1.201 0 11-1.7 1.7L6 7.7l-3.95 3.95a1.201 1.201 0 11-1.7-1.7L4.3 6 .35 2.05C-.12 1.58-.12.82.35.35z"
      />
    </svg>
  </div>
);

RemoveIcon.propTypes = {
  className: PropTypes.string,
  color: PropTypes.string,
  onClick: PropTypes.func,
  onKeyDown: PropTypes.func,
  ariaLabel: PropTypes.string,
};

RemoveIcon.defaultProps = {
  className: '',
  ariaLabel: '',
  color: '#212121',
  onClick: () => {},
  onKeyDown: () => {},
};
