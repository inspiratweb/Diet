import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Url } from 'consts/urls';
import { SettingsSidebar } from 'components/Settings/SettingsSidebar';
import { Profile } from 'components/Settings/Sections/Profile';
import { PageNotFound } from 'components/Common/PageNotFound';
import { getIsUserLoggedIn } from 'selectors/firebase/auth/getIsUserLoggedIn';
import { useSelector } from 'react-redux';
import { Account } from './Sections/Account';

export const SettingsRoutes = () => {
  const isUserLoggedIn = useSelector(getIsUserLoggedIn);

  if (!isUserLoggedIn) {
    return <Redirect to={Url.index()} />;
  }

  return (
    <div className="settings">
      <Switch>
        <Route exact path={[Url.settingsProfile(), Url.settings()]}>
          <SettingsSidebar selectedSection="Profile" />
          <Profile />
        </Route>
        <Route exact path={Url.settingsAccount()}>
          <SettingsSidebar selectedSection="Account" />
          <Account />
        </Route>
        {/*
        <Route exact path={Url.settingsDietPlan()}>
          <SettingsSidebar selectedSection="Diet Plan" />
          <DietPlan />
        </Route>
        <Route exact path={Url.settingsNotifications()}>
          <SettingsSidebar selectedSection="Notifications" />
          <Profile />
        </Route>
        <Route exact path={Url.settingsSocial()}>
          <SettingsSidebar selectedSection="Social" />
          <Profile />
        </Route>
        <Route exact path={Url.settingsIntegrations()}>
          <SettingsSidebar selectedSection="Integrations" />
          <Profile />
        </Route> */}
        <Route path={Url.settings()}>
          <PageNotFound />
        </Route>
      </Switch>
    </div>
  );
};
