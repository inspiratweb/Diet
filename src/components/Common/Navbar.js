import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getLogStatus } from '../../selectors/firebase/getLogStatus';
import { logOut } from '../../actions/firebase/logOut';

export const NavBar = () => {
  const isUserLoggedOut = useSelector(getLogStatus);
  const history = useHistory();

  const handleClick = () => {
    logOut();
    history.push('/log-in');
  };

  return (
    <nav className="navbar">
      <div>
        <Link className="link home" to="/">HOME</Link>
      </div>
      <div>
        {isUserLoggedOut
          ? (
            <>
              <Link className="link sign-up" to="/sign-up">Sign Up</Link>
              <Link className="link log-in" to="/log-in">Log In</Link>
            </>
          )
          : (
            <>
              <Link to="/" className="link log-out" onClick={handleClick}>Log Out</Link>
              <div className="link avatar">AZ</div>
            </>
          )}
      </div>
    </nav>
  );
};
