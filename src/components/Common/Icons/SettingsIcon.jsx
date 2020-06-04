import React from 'react';
import PropTypes from 'prop-types';

export const SettingsIcon = ({ className, color }) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    width="14"
    height="14"
  >
    <path
      fill={color}
      fillRule="evenodd"
      d="M8.06 0c.33 0 .62.24.68.57l.24 1.2c.57.21 1.1.52 1.57.9l1.15-.4c.32-.11.67.02.83.32l1.06 1.82c.17.3.11.66-.15.88l-.92.81c.05.29.08.59.08.9 0 .31-.03.61-.08.9l.92.81c.26.22.32.58.15.87l-1.06 1.83c-.16.3-.51.43-.83.32l-1.15-.4c-.47.38-1 .69-1.57.9l-.24 1.2c-.06.33-.35.57-.68.57H5.94c-.33 0-.62-.24-.68-.57l-.24-1.2c-.57-.21-1.1-.52-1.57-.9l-1.15.4a.682.682 0 01-.83-.32L.41 9.59a.69.69 0 01.15-.88l.92-.81c-.05-.29-.08-.59-.08-.9 0-.31.03-.61.08-.9l-.92-.81a.69.69 0 01-.15-.88l1.06-1.82c.16-.29.51-.43.83-.32l1.15.4c.47-.38 1-.69 1.57-.9l.24-1.2c.06-.33.35-.57.68-.57h2.12zM4.2 7c0 1.55 1.25 2.8 2.8 2.8 1.55 0 2.8-1.25 2.8-2.8 0-1.55-1.25-2.8-2.8-2.8-1.55 0-2.8 1.25-2.8 2.8z"
    />
  </svg>
);

SettingsIcon.defaultProps = {
  className: '',
  color: '#000'
};

SettingsIcon.propTypes = {
  className: PropTypes.string,
  color: PropTypes.string
};
