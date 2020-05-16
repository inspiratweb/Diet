import React from 'react';
import PropTypes, { bool } from 'prop-types';
import { applyKeyboardNavigation } from '../../utils/applyKeyboardNavigation';
import toggler from '../../images/toggler.svg';
import { N_KEY_CODE } from '../../consts/keyboard-key-codes';

const Header = ({ setShowMenu, showMenu }) => (
  <header className="header">
    <img
      role="switch"
      aria-checked={showMenu}
      aria-label="Press F Keyboard Key to expand or collapse the foods side tab"
      onClick={() => setShowMenu(!showMenu)}
      tabIndex="0"
      onKeyDown={
        (e) => applyKeyboardNavigation(e, N_KEY_CODE, () => setShowMenu(!showMenu))
      }
      alt="toggle menu"
      src={toggler}
      className="builder-diet-toggler-icon"
    />
    Arian
  </header>
);

Header.propTypes = {
  setShowMenu: PropTypes.func.isRequired,
  showMenu: bool.isRequired
};

export { Header };
