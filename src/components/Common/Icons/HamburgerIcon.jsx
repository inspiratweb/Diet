import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { applyKeyboardNavigation } from 'utils/applyKeyboardNavigation';
import { S_KEY_CODE } from 'consts/keyboard-key-codes';

export const HambugerIcon = ({ onIconClick, isSideMenuOpen }) => (
  <div
    onClick={onIconClick}
    className={classNames('hamburguer-icon', { open: isSideMenuOpen })}
    role="button"
    aria-label="Press S Keyboard Key to open or close the Sidebar"
    tabIndex="0"
    onKeyDown={
        (e) => applyKeyboardNavigation(e, S_KEY_CODE, onIconClick)
      }
  >
    <span />
    <span />
    <span />
    <span />
  </div>
);

HambugerIcon.propTypes = {
  onIconClick: PropTypes.func,
  isSideMenuOpen: PropTypes.bool
};

HambugerIcon.defaultProps = {
  onIconClick: () => {},
  isSideMenuOpen: false
};
