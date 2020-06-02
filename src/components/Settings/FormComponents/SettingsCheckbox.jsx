import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { useFormContext } from 'react-hook-form';

export const SettingsCheckbox = ({
  label,
  inputClassName,
  labelClassName,
  errorClassName,
  checkboxParagraph,
  isRequired,
  name
}) => {
  const { register, errors } = useFormContext();
  const [isChecked, setIsChecked] = useState(false);

  const handleChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <label className={`settingsCheckbox-label ${labelClassName}`} htmlFor={name}>
      <input
        className={classNames(
          'settingsCheckbox-input', {
            'settingsCheckbox-error': errors[name],
            [`${inputClassName}`]: inputClassName,
            [`${errorClassName}`]: errorClassName
          }
        )}
        type="checkbox"
        name={name}
        id={name}
        value={isChecked}
        onChange={handleChange}
        ref={register({ required: isRequired })}
      />
      <label htmlFor={name} className="settingsCheckbox-paragraph">{checkboxParagraph}</label>
    </label>
  );
};

SettingsCheckbox.defaultProps = {
  labelClassName: '',
  inputClassName: '',
  errorClassName: '',
  checkboxParagraph: '',
  isRequired: false,
};

SettingsCheckbox.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  checkboxParagraph: PropTypes.string,
  labelClassName: PropTypes.string,
  inputClassName: PropTypes.string,
  errorClassName: PropTypes.string,
  isRequired: PropTypes.bool,
};
