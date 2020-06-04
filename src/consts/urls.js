const withBaseUrl = (urlObj) => Object.entries(urlObj).reduce((sum, entries) => {
  const [key, urlTemplate] = entries;

  return {
    ...sum,
    [key]: (...params) => `${urlTemplate}${params.join('/')}`,
  };
}, {});

export const Url = withBaseUrl({
  index: '/',
  // Diet
  diet: '/diet',
  // Builder
  builder: '/diet/builder',
  // Foods
  foods: '/diet/foods',
  // Settings
  settings: '/settings',
  settingsProfile: '/settings/profile',
  settingsAccount: '/settings/account',
  settingsDietPlan: '/settings/diet-plan',
  settingsSecurity: '/settings/security',
  settingsNotifications: '/settings/notifications',
  settingsSocial: '/settings/social',
  settingsIntegrations: '/settings/integrations',
  // Auth
  auth: '/auth',
  signUp: '/auth/sign-up',
  logIn: '/auth/log-in',
  forgotPassword: '/auth/forgot-password',
});
