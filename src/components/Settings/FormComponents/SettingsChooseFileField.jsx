import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { getUserPhotoFromFb } from 'selectors/firebase/profile/getUserPhotoFromFb';
import { uploadUserProfilePicture } from 'actions/firebase/uploadUserProfilePicture';
import { PicturePreview } from './PicturePreview';

export const SettingsChooseFileField = ({
  label,
  inputClassName,
  name,
  initialValue
}) => {
  const dispatch = useDispatch();
  const initialPhotoUrl = useSelector(getUserPhotoFromFb);
  const [picture, setPicture] = useState();
  const [pictureUrl, setPictureUrl] = useState(initialValue);
  const [inputValue, setInputValue] = useState('');

  const handleChange = (e) => {
    const reader = new FileReader();
    const file = e.target.files[0];
    setInputValue(e.target.value);

    reader.onloadend = () => {
      setPicture(file);
      setPictureUrl(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const handleCancelPictureUpdate = () => {
    setPictureUrl(initialPhotoUrl);
    setInputValue('');
  };

  const handlePictureUpload = () => {
    if (inputValue) {
      dispatch(uploadUserProfilePicture(picture));
      setInputValue('');
    }
  };

  return (
    <div
      className="settingsChooseFileField"
    >
      <span
        className="settingsChooseFileField-title"
      >
        {label}
      </span>
      <PicturePreview pictureUrl={pictureUrl} />
      <label htmlFor={name}>
        <input
          className={`settingsChooseFileField-input ${inputClassName}`}
          name={name}
          id={name}
          onChange={handleChange}
          type="file"
          accept="image/*"
          value={inputValue}
        />
      </label>
      <div
        className="settingsChooseFileField-actionButtons"
      >
        <button
          className="settingsChooseFileField-button settingsChooseFileField-uploadButton"
          type="button"
          onClick={handlePictureUpload}
        >
          Use this picture
        </button>
        <button
          className="settingsChooseFileField-button settingsChooseFileField-cancelButton"
          onClick={handleCancelPictureUpdate}
          type="button"
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

SettingsChooseFileField.defaultProps = {
  inputClassName: '',
  initialValue: '',
};

SettingsChooseFileField.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  initialValue: PropTypes.string,
  inputClassName: PropTypes.string,
};
