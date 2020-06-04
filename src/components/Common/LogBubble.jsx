import React, { useState, useEffect, useRef } from 'react';
import classNames from 'classnames';
import { logOut } from 'actions/firebase/logOut';
import { useDispatch, useSelector } from 'react-redux';
import { getIsUserLoggedIn } from 'selectors/firebase/auth/getIsUserLoggedIn';
import { Link } from 'react-router-dom';
import { Url } from 'consts/urls';
import { ENTER_KEY_CODE } from 'consts/keyboard-key-codes';
import { applyKeyboardNavigation } from 'utils/applyKeyboardNavigation';
import { isLoaded } from 'react-redux-firebase';
import { getUserDataFromFb } from 'selectors/firebase/auth/getUserDataFromFb';
import { AvatarPlaceholder } from './AvatarPlaceholder';
import { SettingsIcon } from './Icons/SettingsIcon';
import { LogOutIcon } from './Icons/LogOutIcon';

export const LogBubble = () => {
  const dispatch = useDispatch();
  const [showLinks, setShowLinks] = useState(false);
  const isUserLoggedIn = useSelector(getIsUserLoggedIn);
  const userData = useSelector(getUserDataFromFb);
  const ref = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setShowLinks(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref]);

  const onAvatarClick = () => {
    setShowLinks(!showLinks);
  };

  if (!isLoaded(userData)) {
    return null;
  }

  if (!isUserLoggedIn) {
    return (
      <div className="logBubble logBubble-sign-links">
        <Link to={Url.logIn()}>Log In</Link>
        <Link to={Url.signUp()}>Sign Up</Link>
      </div>
    );
  }

  return (
    <div ref={ref} className="logBubble logBubble-avatar">
      <AvatarPlaceholder
        onClick={onAvatarClick}
        onKeyDown={
          (e) => applyKeyboardNavigation(e, ENTER_KEY_CODE, () => onAvatarClick(e))
        }
      />
      <div className={classNames('logBubble-links', { showLinks })}>
        <Link
          to={Url.settings()}
          className="logBubble-settings"
        >
          <SettingsIcon />
          <span>Settings</span>
        </Link>
        <button
          className="logBubble-logOut"
          type="button"
          onClick={() => dispatch(logOut())}
        >
          <LogOutIcon />
          <span>Log out</span>
        </button>
      </div>
    </div>
  );
};
