import React from 'react';
import PropTypes from 'prop-types';

export const MainLogo = ({ className, onClick }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="32"
    height="26"
    onClick={onClick}
    className={className}
  >
    <path
      fill="#ed174f"
      d="M31.68 0H0l3.09 5.31h22.54c4.61 0 6.05-5.31 6.05-5.31zm-9.65 12.37c4.6 0 6.04-5.32 6.04-5.32H4.11l3.1 5.32h14.82zM8.24 14.16c2.6 4.44 5.21 8.89 5.31 9.07 2.31 3.95 7.67 2.52 7.67 2.52l-6.79-11.59H8.24z"
    />
  </svg>
);

MainLogo.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func
};

MainLogo.defaultProps = {
  className: '',
  onClick: () => {}
};
