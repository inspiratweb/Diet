import React, { useState } from 'react';
import { logOut } from 'actions/firebase/logOut';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { Url } from 'consts/urls';
import { HambugerIcon } from './Icons/HamburgerIcon';
import { MainLogo } from './Icons/MainLogo';

export const MainHeader = () => {
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);

  if (pathname === Url.auth()) {
    return null;
  }

  const handleIconToggle = () => {
    setIsSideMenuOpen(!isSideMenuOpen);
  };

  return (
    <header className="mainHeader">
      <HambugerIcon
        isSideMenuOpen={isSideMenuOpen}
        onIconClick={handleIconToggle}
      />
      <MainLogo />
      <button type="button" onClick={() => dispatch(logOut())}>Log Out</button>
    </header>
  );
};
