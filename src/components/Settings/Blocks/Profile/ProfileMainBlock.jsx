import React from 'react';
import { useForm, FormContext } from 'react-hook-form';
import { useSelector, useDispatch } from 'react-redux';
import { getDisplayNameFromFb } from 'selectors/firebase/profile/getDisplayNameFromFb';
import { getUserPhotoFromFb } from 'selectors/firebase/profile/getUserPhotoFromFb';
import { updateUserProfile } from 'actions/firebase/updateUserProfile';
import { SettingsInputField } from 'components/Settings/FormComponents/SettingsInputField';
import { SettingsChooseFileField } from 'components/Settings/FormComponents/SettingsChooseFileField';

export const ProfileMainBlock = () => {
  const dispatch = useDispatch();
  const methods = useForm();
  const { handleSubmit } = methods;

  const initialDisplayName = useSelector(getDisplayNameFromFb);
  const initialPhotoUrl = useSelector(getUserPhotoFromFb);

  const onSubmit = ({ name, surname }, e) => {
    e.preventDefault();
    const displayName = `${name} ${surname}`;
    let values = {};

    if (displayName !== initialDisplayName) {
      values = {
        ...values, displayName, name, surname
      };
    }

    dispatch(updateUserProfile(values));
  };

  const name = initialDisplayName ? initialDisplayName.split(' ') : [];
  const [firstName = '', ...surname] = name;

  return (
    <div className="profileForm">
      <h2 className="profileForm-title">Public Profile</h2>
      <FormContext {...methods}>
        <form
          onSubmit={handleSubmit(onSubmit)}
        >
          <SettingsInputField
            label="Name"
            name="name"
            initialValue={firstName}
          />
          <SettingsInputField
            label="Surname"
            name="surname"
            initialValue={surname.join(' ')}
          />
          <SettingsChooseFileField
            label="Upload Image"
            name="uploadImg"
            initialValue={initialPhotoUrl && initialPhotoUrl}
          />
          <button
            className="profileForm-submit"
            type="submit"
          >
            Update Profile
          </button>
        </form>
      </FormContext>
    </div>
  );
};
