import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { AuthPage } from './AuthPage';
import { LogInForm } from './LogInForm';
import { SignUpForm } from './SignUpForm';
import { ForgotPasswordForm } from './ForgotPasswordForm';

export const AuthRoutes = () => (
  <Switch>
    <Route exact path="/auth/sign-up">
      <AuthPage
        header="Sign up."
        paragraph="Create a new account or "
        link="Log in if you already have an account."
        linkTo="/auth/log-in"
      >
        <SignUpForm />
      </AuthPage>
    </Route>
    <Route exact path="/auth/forgot-password">
      <AuthPage
        header="Find your account."
        paragraph="Please enter your email or phone number to search for your account."
      >
        <ForgotPasswordForm />
      </AuthPage>
    </Route>
    <Route path="/auth">
      <AuthPage
        header="Log in."
        paragraph="Enter jour cedentials to join Fuel For Live or "
        link="create a new account."
        linkTo="/auth/sign-up"
      >
        <LogInForm />
      </AuthPage>
    </Route>
  </Switch>
);