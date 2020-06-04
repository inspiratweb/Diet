import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { useFormContext } from 'react-hook-form';

export const SettingsConfirmPassword = ({
  label,
  errorMessage,
  inputClassName,
  labelClassName,
  errorClassName,
  titleClassName,
  maxLength,
  validateAgainst,
  name
}) => {
  const { register, errors, watch } = useFormContext();

  const password = useRef({});
  password.current = watch(validateAgainst, '');

  return (
    <label className={`settingsInputField-label ${labelClassName}`} htmlFor={name}>
      <div className={`settingsInputField-titleRow ${titleClassName}`}>
        <span>{label}</span>
        <span className={`settingsInputField-error ${errorClassName}`}>
          {errors[name] && errors[name].message}
        </span>
      </div>
      <input
        className={`settingsInputField-input ${inputClassName}`}
        name={name}
        id={name}
        maxLength={maxLength}
        type="password"
        ref={register({
          required: errorMessage,
          validate: (val) => val === password.current || 'Your passwords do not match'
        })}
      />
    </label>
  );
};

SettingsConfirmPassword.defaultProps = {
  errorMessage: '',
  maxLength: 1000,
  labelClassName: '',
  inputClassName: '',
  errorClassName: '',
  titleClassName: '',
};

SettingsConfirmPassword.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  errorMessage: PropTypes.string,
  maxLength: PropTypes.number,
  labelClassName: PropTypes.string,
  inputClassName: PropTypes.string,
  errorClassName: PropTypes.string,
  titleClassName: PropTypes.string,
  validateAgainst: PropTypes.string.isRequired,
};
