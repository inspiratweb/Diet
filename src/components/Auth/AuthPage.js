import React from 'react';
import { useHistory, Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import BackArrowIcon from '../../images/back-arrow.png';
import MainLogo from '../../images/main-logo.svg';
import { applyKeyboardNavigation } from '../../utils/applyKeyboardNavigation';
import { B_KEY_CODE } from '../../consts/keyboard-key-codes';

export const AuthPage = ({
  header, paragraph, link, linkTo, children
}) => {
  const history = useHistory();
  const handleClick = () => {
    history.goBack();
  };

  return (
    <div className="authPage">
      <img
        className="authPage-backArrow"
        role="button"
        aria-label="Press B Keyboard Key to go back"
        onKeyDown={
          (e) => applyKeyboardNavigation(e, B_KEY_CODE, handleClick)
        }
        tabIndex="0"
        onClick={handleClick}
        alt="Back Arrow Icon"
        src={BackArrowIcon}
      />
      <div className="authPage-main">
        <img
          className="authPage-main-logo"
          alt="Main Logo"
          src={MainLogo}
        />
        <h1 className="authPage-main-header">{header}</h1>
        <p className="authPage-main-paragraph">
          {paragraph}
          {linkTo && link && <Link className="authPage-main-paragraphLink" to={linkTo}>{link}</Link>}
        </p>
        {children}
      </div>
    </div>
  );
};

AuthPage.propTypes = {
  header: PropTypes.string,
  paragraph: PropTypes.string,
  link: PropTypes.string,
  linkTo: PropTypes.string,
  children: PropTypes.node.isRequired
};

AuthPage.defaultProps = {
  header: '',
  paragraph: '',
  link: undefined,
  linkTo: undefined
};
