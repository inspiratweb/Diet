import React, { useState } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import { Url } from 'consts/urls';
import { HambugerIcon } from 'components/Common/Icons/HamburgerIcon';
import { MainLogo } from 'components/Common/Icons/MainLogo';
import { LogBubble } from 'components/Common/LogBubble';
import { isPathInUrl } from 'utils/isPathInUrl';

export const MainHeader = () => {
  const { pathname } = useLocation();
  const history = useHistory();
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);

  if (isPathInUrl(pathname, Url.auth())) {
    return null;
  }

  const handleIconToggle = () => {
    setIsSideMenuOpen(!isSideMenuOpen);
  };

  const handleClick = () => {
    history.push(Url.index());
  };

  return (
    <header className="mainHeader">
      <HambugerIcon
        isSideMenuOpen={isSideMenuOpen}
        onIconClick={handleIconToggle}
      />
      <MainLogo
        onClick={handleClick}
        className="mainHeader-logo"
      />
      <LogBubble />
    </header>
  );
};
