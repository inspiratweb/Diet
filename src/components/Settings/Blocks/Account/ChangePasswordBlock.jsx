import React from 'react';
import { FormContext, useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { PASSWORD_VALIDATOR } from 'consts/regex-validators';
import { SettingsConfirmPassword } from 'components/Settings/FormComponents/SettingsConfirmPassword';
import { SettingsPasswordField } from 'components/Settings/FormComponents/SettingsPasswordField';
import { getUserEmailFromFb } from 'selectors/firebase/auth/getUserEmailFromFb';
import { updatePassword } from 'actions/firebase/updatePassword';

export const ChangePasswordBlock = () => {
  const email = useSelector(getUserEmailFromFb);
  const dispatch = useDispatch();
  const methods = useForm();
  const { handleSubmit } = methods;

  const onSubmit = ({ password, newPassword }, e) => {
    e.preventDefault();

    dispatch(updatePassword({
      email,
      password,
      newPassword
    }));
  };

  return (
    <div className="accountForm">
      <h2 className="accountForm-title">Change Password</h2>
      <FormContext {...methods}>
        <form
          onSubmit={handleSubmit(onSubmit)}
        >
          <SettingsPasswordField
            name="password"
            label="Old Password"
            type="password"
            validator={PASSWORD_VALIDATOR}
            errorMessage="* Invalid Password"
            isRequired
          />
          <SettingsPasswordField
            name="newPassword"
            label="New Password"
            type="password"
            errorMessage="* Invalid Password"
            isRequired
          />
          <SettingsConfirmPassword
            name="newPwdConfirmation"
            label="Confirm New Password"
            type="password"
            errorMessage="* Invalid Password"
            validator={PASSWORD_VALIDATOR}
            validateAgainst="newPassword"
            isRequired
          />
          <div className="accountForm-actionButtons">
            <button
              className="accountForm-submit"
              type="submit"
            >
              Change Password
            </button>
          </div>
        </form>
      </FormContext>
    </div>
  );
};
