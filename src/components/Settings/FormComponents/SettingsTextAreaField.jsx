import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useFormContext } from 'react-hook-form';
import { ANY_CHARACTER_VALIDATOR } from 'consts/regex-validators';

export const SettingsTextAreaField = ({
  label,
  errorMessage,
  inputClassName,
  errorClassName,
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
    <label
      className="settingsTextAreaField"
      htmlFor={name}
    >
      <div className="settingsTextAreaField-titleRow">
        <span>{label}</span>
        <span className={errorClassName}>
          {errors.password && errors.password.message}
        </span>
      </div>
      <textarea
        className={`settingsTextAreaField-textarea ${inputClassName}`}
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

SettingsTextAreaField.defaultProps = {
  errorMessage: '',
  validator: ANY_CHARACTER_VALIDATOR,
  maxLength: 1000,
  inputClassName: '',
  errorClassName: '',
  isRequired: false,
  initialValue: ''
};

SettingsTextAreaField.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  errorMessage: PropTypes.string,
  validator: PropTypes.instanceOf(RegExp),
  maxLength: PropTypes.number,
  inputClassName: PropTypes.string,
  errorClassName: PropTypes.string,
  isRequired: PropTypes.bool,
  initialValue: PropTypes.string
};
