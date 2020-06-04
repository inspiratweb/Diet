import React from 'react';
import { useForm, FormContext } from 'react-hook-form';
import { updateUserProfile } from 'actions/firebase/updateUserProfile';
import { useDispatch, useSelector } from 'react-redux';
import { getBioFromFb } from 'selectors/firebase/profile/getBioFromFb';
import { getLocationFromFb } from 'selectors/firebase/profile/getLocationFromFb';
import { getDobFromFb } from 'selectors/firebase/profile/getDobFromFb';
import { SettingsInputField } from './FormComponents/SettingsInputField';
import { SettingsTextAreaField } from './FormComponents/SettingsTextAreaField';
import { SettingsDobField } from './FormComponents/SettingsDobField';

export const ProfilePersonalBlock = () => {
  const dispatch = useDispatch();
  const methods = useForm();
  const { handleSubmit } = methods;

  const initialBio = useSelector(getBioFromFb);
  const initialLocation = useSelector(getLocationFromFb);
  const initialDob = useSelector(getDobFromFb);

  const onSubmit = ({
    bio, location, dateOfBirth
  }, e) => {
    e.preventDefault();

    let values = {};

    if (initialBio !== bio) {
      values = {...values, bio};
    }

    if (initialLocation !== location) {
      values = {...values, location};
    }

    if (initialDob !== dateOfBirth) {
      values = {...values, dateOfBirth };
    }

    dispatch(updateUserProfile(values));
  };

  return (
    <div className="profileForm">
      <FormContext {...methods}>
        <form
          onSubmit={handleSubmit(onSubmit)}
        >
          <SettingsTextAreaField
            label="Bio"
            name="bio"
            initialValue={initialBio && initialBio}
          />
          <SettingsInputField
            label="Location"
            name="location"
            initialValue={initialLocation && initialLocation}
          />
          <SettingsDobField
            label="Date of birth"
            name="dateOfBirth"
            initialValue={initialDob}
          />
          <button
            type="submit"
            className="profileForm-submit"
          >
            Update Personal Info
          </button>
        </form>
      </FormContext>
    </div>
  );
};
