import React, { useState, useEffect, useRef } from 'react';
import classNames from 'classnames';
import { logOut } from 'actions/firebase/logOut';
import { useDispatch, useSelector } from 'react-redux';
import { getIsUserLoggedOut } from 'selectors/firebase/getIsUserLoggedOut';
import { Link } from 'react-router-dom';
import { Url } from 'consts/urls';
import { ENTER_KEY_CODE } from 'consts/keyboard-key-codes';
import { applyKeyboardNavigation } from 'utils/applyKeyboardNavigation';
import { isLoaded } from 'react-redux-firebase';
import { getUserDataFromFb } from 'selectors/firebase/getUserDataFromFb';
import { AvatarPlaceholder } from './AvatarPlaceholder';

export const LogBubble = () => {
  const dispatch = useDispatch();
  const [showLogOut, setShowLogOut] = useState(false);
  const isUserLoggedOut = useSelector(getIsUserLoggedOut);
  const useData = useSelector(getUserDataFromFb);
  const ref = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setShowLogOut(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref]);

  const onAvatarClick = () => {
    setShowLogOut(!showLogOut);
  };

  if (!isLoaded(useData)) {
    return null;
  }

  if (isUserLoggedOut) {
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
      <button
        className={classNames('logBubble-logOut', { showLogOut })}
        type="button"
        onClick={() => dispatch(logOut())}
      >
        Log out
      </button>
    </div>
  );
};
