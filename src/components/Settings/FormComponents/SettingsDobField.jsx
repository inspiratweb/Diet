/* eslint-disable no-underscore-dangle */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useFormContext } from 'react-hook-form';

export const SettingsDobField = ({
  name, label, initialValue
}) => {
  const { register } = useFormContext();
  const [value, setValue] = useState(initialValue);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <label
      htmlFor={name}
      className="settingsDobField"
    >
      <div className="settingsDobField-titleRow">
        <span className="settingsDobField-title">{label}</span>
      </div>
      <input
        type="date"
        value={value}
        onChange={handleChange}
        name={name}
        ref={register}
      />
    </label>
  );
};

SettingsDobField.defaultProps = {
  name: '',
  label: '',
  initialValue: '',
};

SettingsDobField.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  initialValue: PropTypes.string,
};
