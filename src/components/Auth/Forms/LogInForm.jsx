// TODO: Link Terms and conditions
// TODO: Link Privacy policy
import React from 'react';
import { useForm, FormContext } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { PasswordInput } from 'components/Auth/FormComponents/PasswordInput';
import { logIn } from 'actions/firebase/logIn';
import { EmailInput } from 'components/Auth/FormComponents/EmailInput';
import { Url } from 'consts/urls';

export const LogInForm = () => {
  const methods = useForm();
  const { handleSubmit } = methods;
  const dispatch = useDispatch();

  const onSubmit = (values, e) => {
    e.preventDefault();
    dispatch(logIn(values));
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
          <Link to={Url.index()}>Privacy Policy</Link>
        &nbsp;and our&nbsp;
          <Link to={Url.index()}>Terms of Service</Link>
        </p>
        <div className="authForm-subForm">
          <Link to={Url.forgotPassword()}>Forgot your account?</Link>
          &nbsp;&nbsp;•&nbsp;&nbsp;
          <Link to={Url.signUp()}>Sign Up for Fuel For Live</Link>
        </div>
      </form>
    </FormContext>
  );
};
