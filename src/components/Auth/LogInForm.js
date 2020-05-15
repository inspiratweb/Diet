// TODO: Link Terms and conditions
// TODO: Link Privacy policy
import React from 'react';
import { useForm, FormContext } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { logIn } from '../../actions/firebase/logIn';
import { EmailInput } from './FormComponents/EmailInput';
import { PasswordInput } from './FormComponents/PasswordInput';

export const LogInForm = () => {
  const methods = useForm();
  const { handleSubmit } = methods;

  const onSubmit = (values, e) => {
    e.preventDefault();
    logIn(values);
  };

  return (
    <FormContext {...methods}>
      <form
        className="authForm"
        onSubmit={handleSubmit(onSubmit)}
      >
        <EmailInput />
        <PasswordInput />
        <button
          className="authForm-submitBtn"
          type="submit"
        >
          Submit
        </button>
        <p className="authForm-terms">
          By continuing, you agree to our&nbsp;
          <Link to="/">Privacy Policy</Link>
        &nbsp;and our&nbsp;
          <Link to="/">Terms of Service</Link>
        </p>
        <div className="authForm-subForm">
          <Link to="/auth/forgot-password">Forgot your account?</Link>
          &nbsp;&nbsp;•&nbsp;&nbsp;
          <Link to="/auth/sign-up">Sign Up for Fuel For Live</Link>
        </div>
      </form>
    </FormContext>
  );
};
