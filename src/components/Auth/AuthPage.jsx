import React from 'react';
import { useHistory, Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { applyKeyboardNavigation } from 'utils/applyKeyboardNavigation';
import { B_KEY_CODE } from 'consts/keyboard-key-codes';
import { MainLogo } from 'components/Common/Icons/MainLogo';
import { BackArrowIcon } from 'components/Common/Icons/BackArrowIcon';

export const AuthPage = ({
  header, paragraph, link, linkTo, children
}) => {
  const history = useHistory();
  const handleClick = () => {
    history.goBack();
  };

  return (
    <div className="authPage">
      <BackArrowIcon
        className="authPage-backArrow"
        ariaLabel="Press B Keyboard Key to go back"
        onKeyDown={
          (e) => applyKeyboardNavigation(e, B_KEY_CODE, handleClick)
        }
        onClick={handleClick}
      />
      <div className="authPage-main">
        <MainLogo
          className="authPage-main-logo"
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
