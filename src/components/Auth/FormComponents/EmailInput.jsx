import React from 'react';
import { useFormContext } from 'react-hook-form';
import PropTypes from 'prop-types';
import {
  EMAIL_ADDRESS_VALIDATOR
} from 'consts/regex-validators';

export const EmailInput = ({ message }) => {
  const { register, errors } = useFormContext();

  return (
    <label htmlFor="email">
      <div className="authForm-label">
        <span>Email</span>
        <span className="authForm-fieldError">
          {errors.email && errors.email.message}
        </span>
      </div>
      <input
        className="authForm-field"
        placeholder="your_email@domain.com"
        name="email"
        ref={register({
          required: '* Required',
          pattern: {
            value: EMAIL_ADDRESS_VALIDATOR,
            message
          }
        })}
      />
    </label>
  );
};

EmailInput.propTypes = {
  message: PropTypes.string
};

EmailInput.defaultProps = {
  message: '* Invalid email address'
};
