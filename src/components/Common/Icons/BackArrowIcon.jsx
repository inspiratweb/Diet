import React from 'react';
import PropTypes from 'prop-types';

export const BackArrowIcon = ({
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
      width="37"
      height="37"
    >
      <style />
      <path
        id="Layer"
        fill={color}
        d="M25.89 2.95c-.05 0-.1.01-.15.02-.04.01-.09.03-.13.05a.45.45 0 00-.12.06c-.04.03-.08.06-.11.1l-14.8 14.8c-.07.07-.13.15-.16.24a.671.671 0 000 .56c.03.09.09.17.16.24l14.8 14.8c.13.15.32.23.52.23a.75.75 0 00.75-.75c0-.2-.08-.39-.23-.52L12.15 18.5 26.42 4.22c.11-.1.18-.23.21-.38s.02-.3-.04-.44a.814.814 0 00-.28-.33.813.813 0 00-.42-.12z"
      />
    </svg>
  </div>
);

BackArrowIcon.propTypes = {
  className: PropTypes.string,
  color: PropTypes.string,
  onClick: PropTypes.func,
  onKeyDown: PropTypes.func,
  ariaLabel: PropTypes.string,
};

BackArrowIcon.defaultProps = {
  className: '',
  ariaLabel: '',
  color: '#000',
  onClick: () => {},
  onKeyDown: () => {},
};
