import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useFormContext } from 'react-hook-form';
import { PASSWORD_VALIDATOR } from '../../../consts/regex-validators';
import { applyKeyboardNavigation } from '../../../utils/applyKeyboardNavigation';
import { SPACE_KEY_CODE } from '../../../consts/keyboard-key-codes';

export const PasswordInput = ({ message }) => {
  const { register, errors } = useFormContext();
  const [showPassword, setShowPassword] = useState(false);

  const handleClick = () => {
    setShowPassword(!showPassword);
  };

  return (
    <label htmlFor="password">
      <div className="authForm-label">
        <span>Password</span>
        <span className="authForm-fieldError">
          {errors.password && errors.password.message}
        </span>
      </div>
      <div className="authForm-password">
        <input
          className="authForm-password-field"
          name="password"
          id="password"
          type={showPassword ? 'text' : 'password'}
          ref={register({
            required: '* Required',
            pattern: {
              value: PASSWORD_VALIDATOR,
              message
            }
          })}
        />
        <div
          className="authForm-password_type"
          role="checkbox"
          tabIndex={0}
          aria-checked={showPassword}
          onKeyDown={
            (e) => applyKeyboardNavigation(e, SPACE_KEY_CODE, () => handleClick(e))
          }
          onClick={handleClick}
        >
          {showPassword ? 'hide' : 'show'}
        </div>
      </div>
    </label>
  );
};

PasswordInput.defaultProps = {
  message: '* Are you sure?'
};

PasswordInput.propTypes = {
  message: PropTypes.string
};
