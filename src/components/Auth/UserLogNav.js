import React from 'react';
import { useSelector } from 'react-redux';
import { getLogStatus } from '../../selectors/firebase/getLogStatus';
import getEmailVerificationStatus from '../../selectors/firebase/getEmailVerificationStatus';

export const UserLogNav = () => {
  const isUserLoggedOut = useSelector(getLogStatus);
  const isEmailVerified = useSelector(getEmailVerificationStatus);

  return (
    <nav className="user-log-status">
      {!isEmailVerified && !isUserLoggedOut && <span className="email-not-verified">User email is not Verified</span>}
      {isUserLoggedOut && <span className="not-logged">User is NOT Logged In</span>}
      {!isUserLoggedOut && <span className="logged">User is Logged In</span>}
    </nav>
  );
};
