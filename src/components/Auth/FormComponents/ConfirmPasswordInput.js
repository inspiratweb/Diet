import React, { useRef } from 'react';
import { useFormContext } from 'react-hook-form';

export const ConfirmPasswordInput = () => {
  const { register, errors, watch } = useFormContext();

  const password = useRef({});
  password.current = watch('password', '');

  return (
    <label htmlFor="repeatPassword">
      <div className="authForm-label">
        <span>Re-enter Password</span>
        <span className="authForm-fieldError">
          {errors.repeatPassword && errors.repeatPassword.message}
        </span>
      </div>
      <input
        className="authForm-field"
        name="repeatPassword"
        type="password"
        ref={register({
          required: '* Required',
          validate: (value) => value === password.current || 'Your passwords do not match'
        })}
      />
    </label>
  );
};
