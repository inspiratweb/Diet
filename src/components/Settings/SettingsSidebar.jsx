import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Url } from 'consts/urls';

export const SettingsSidebar = ({ selectedSection }) => {

  const settingsSections = [
    {
      url: Url.settingsProfile(),
      label: 'Profile'
    },
    {
      url: Url.settingsAccount(),
      label: 'Account'
    },
    // {
    //   url: Url.settingsBilling(),
    //   label: 'Billing'
    // },
    // {
    //   url: Url.settingsDietPlan(),
    //   label: 'Diet Plan'
    // },
    // {
    //   url: Url.settingsNotifications(),
    //   label: 'Notifications'
    // },
    // {
    //   url: Url.settingsSocial(),
    //   label: 'Social'
    // },
    // {
    //   url: Url.settingsIntegrations(),
    //   label: 'Integrations'
    // },
  ];

  return (
    <aside className="settings-sidebar">
      {settingsSections.map((section) => {
        const isSectionSelected = selectedSection === section.label;

        return (
          <Link
            key={section.label}
            className={classNames('sidebar-link', { isSectionSelected })}
            to={section.url}
          >
            {section.label}
          </Link>
        );
      })}
    </aside>
  );
};

SettingsSidebar.propTypes = {
  selectedSection: PropTypes.string.isRequired
};
