import React from 'react';
import PropTypes from 'prop-types';

export const SearchIcon = ({ className, color }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="14"
    height="14"
    className={className}
  >
    <path
      fill={color}
      fillRule="evenodd"
      d="M10.303 8.182a5.5 5.5 0 10-2.121 2.121l3.414 3.414a1.5 1.5 0 102.121-2.12l-3.414-3.415zM5.5 9a3.5 3.5 0 100-7 3.5 3.5 0 000 7z"
    />
  </svg>
);

SearchIcon.propTypes = {
  className: PropTypes.string,
  color: PropTypes.string,
};

SearchIcon.defaultProps = {
  className: '',
  color: '#FFF'
};
