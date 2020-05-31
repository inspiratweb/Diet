import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useFormContext } from 'react-hook-form';
import { ANY_CHARACTER_VALIDATOR } from 'consts/regex-validators';

export const SettingsInputField = ({
  label,
  errorMessage,
  inputClassName,
  labelClassName,
  errorClassName,
  titleClassName,
  maxLength,
  isRequired,
  validator,
  initialValue,
  name
}) => {
  const { register, errors } = useFormContext();
  const [value, setValue] = useState(initialValue);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <label className={`settingsInputField-label' ${labelClassName}`} htmlFor={name}>
      <div className={`settingsInputField-titleRow ${titleClassName}`}>
        <span>{label}</span>
        <span className={`settingsInputField-error ${errorClassName}`}>
          {errors.password && errors.password.message}
        </span>
      </div>
      <input
        className={`settingsInputField-input ${inputClassName}`}
        name={name}
        id={name}
        maxLength={maxLength}
        value={value}
        onChange={handleChange}
        ref={register({
          required: isRequired && '* Required',
          pattern: {
            value: validator,
            message: errorMessage
          }
        })}
      />
    </label>
  );
};

SettingsInputField.defaultProps = {
  errorMessage: '',
  validator: ANY_CHARACTER_VALIDATOR,
  maxLength: 1000,
  labelClassName: '',
  inputClassName: '',
  errorClassName: '',
  titleClassName: '',
  isRequired: false,
  initialValue: ''
};

SettingsInputField.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  errorMessage: PropTypes.string,
  validator: PropTypes.instanceOf(RegExp),
  maxLength: PropTypes.number,
  labelClassName: PropTypes.string,
  inputClassName: PropTypes.string,
  errorClassName: PropTypes.string,
  titleClassName: PropTypes.string,
  isRequired: PropTypes.bool,
  initialValue: PropTypes.string
};
