import React from 'react';
import PropTypes from 'prop-types';
import { useFormContext } from 'react-hook-form';
import { ANY_CHARACTER_VALIDATOR } from 'consts/regex-validators';

export const SettingsPasswordField = ({
  label,
  errorMessage,
  inputClassName,
  labelClassName,
  errorClassName,
  titleClassName,
  maxLength,
  isRequired,
  validator,
  type,
  name
}) => {
  const { register, errors } = useFormContext();

  return (
    <label className={`settingsInputField-label' ${labelClassName}`} htmlFor={name}>
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
        type={type}
        ref={register({
          required: isRequired && '* Required',
          pattern: {
            value: validator,
            message: errorMessage
          },
        })}
      />
    </label>
  );
};

SettingsPasswordField.defaultProps = {
  errorMessage: '',
  validator: ANY_CHARACTER_VALIDATOR,
  maxLength: 1000,
  labelClassName: '',
  inputClassName: '',
  errorClassName: '',
  titleClassName: '',
  isRequired: false,
  type: 'text',
};

SettingsPasswordField.propTypes = {
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
  type: PropTypes.string,
};
