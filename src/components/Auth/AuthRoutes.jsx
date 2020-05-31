import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { ForgotPasswordForm } from 'components/Auth/Forms/ForgotPasswordForm';
import { AuthPage } from 'components/Auth/AuthPage';
import { LogInForm } from 'components/Auth/Forms/LogInForm';
import { SignUpForm } from 'components/Auth/Forms/SignUpForm';
import { getIsUserLoggedIn } from 'selectors/firebase/auth/getIsUserLoggedIn';
import { useSelector } from 'react-redux';
import { Url } from 'consts/urls';

export const AuthRoutes = () => {
  const isUserLoggedIn = useSelector(getIsUserLoggedIn);

  if (isUserLoggedIn) {
    return <Redirect to={Url.index()} />;
  }

  return (
    <Switch>
      <Route exact path={Url.signUp()}>
        <AuthPage
          header="Sign up."
          paragraph="Create a new account or "
          link="Log in if you already have an account."
          linkTo={Url.logIn()}
        >
          <SignUpForm />
        </AuthPage>
      </Route>
      <Route exact path={Url.forgotPassword()}>
        <AuthPage
          header="Find your account."
          paragraph="Please enter your email or phone number to search for your account."
        >
          <ForgotPasswordForm />
        </AuthPage>
      </Route>
      <Route path={Url.auth()}>
        <AuthPage
          header="Log in."
          paragraph="Enter jour cedentials to join Fuel For Live or "
          link="create a new account."
          linkTo={Url.signUp()}
        >
          <LogInForm />
        </AuthPage>
      </Route>
    </Switch>
  );
};
