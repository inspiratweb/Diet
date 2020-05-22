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
  // Auth
  auth: '/auth',
  signUp: '/auth/sign-up',
  logIn: '/auth/log-in',
  forgotPassword: '/auth/forgot-password',
});
