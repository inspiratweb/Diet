/* eslint-disable no-underscore-dangle */
import React from 'react';
import PropTypes from 'prop-types';
import ReactDatePicker from 'react-datepicker';
import { Controller, useFormContext } from 'react-hook-form';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';

export const SettingsDobField = ({
  name, label, selected
}) => {
  const { control } = useFormContext();

  return (
    <label
      htmlFor={name}
      className="settingsDobField"
    >
      <div className="settingsDobField-titleRow">
        <span className="settingsDobField-title">{label}</span>
      </div>
      <Controller
        as={ReactDatePicker}
        control={control}
        valueName="selected"
        onChange={([selectedVal]) => selectedVal}
        defaultValue={selected ? moment(selected, 'MM/DD/YYY')._d : null}
        name={name}
        placeholderText="Select date"
        showPopperArrow={false}
      />
    </label>
  );
};

SettingsDobField.defaultProps = {
  name: '',
  label: '',
  selected: '',
};

SettingsDobField.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  selected: PropTypes.string,
};
