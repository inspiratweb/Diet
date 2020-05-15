import React from 'react';
import { useForm, FormContext } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { signUp } from '../../actions/firebase/signUp';
import { EmailInput } from './FormComponents/EmailInput';
import { PasswordInput } from './FormComponents/PasswordInput';
import { ConfirmPasswordInput } from './FormComponents/ConfirmPasswordInput';

export const SignUpForm = () => {
  const methods = useForm();
  const { handleSubmit } = methods;
  const dispatch = useDispatch();

  const onSubmit = ({ email, password }, e) => {
    e.preventDefault();
    dispatch(signUp({ email, password }));
  };

  return (
    <FormContext {...methods}>
      <form
        className="authForm"
        onSubmit={handleSubmit(onSubmit)}
      >
        <EmailInput />
        <PasswordInput
          message="Your password does not meet our minimum strength requirements"
        />
        <ConfirmPasswordInput />

        <button
          className="authForm-submitBtn"
          type="submit"
        >
          Submit
        </button>
        <div className="authForm-subForm">
          <Link to="/auth/log-in">Log In to join Fuel For Live</Link>
        </div>
      </form>
    </FormContext>
  );
};
