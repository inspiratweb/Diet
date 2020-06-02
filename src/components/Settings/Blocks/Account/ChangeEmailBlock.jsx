import React from 'react';
import { FormContext, useForm } from 'react-hook-form';
import { SettingsInputField } from 'components/Settings/FormComponents/SettingsInputField';
import { EMAIL_ADDRESS_VALIDATOR } from 'consts/regex-validators';
import { useSelector, useDispatch } from 'react-redux';
import { getUserEmailFromFb } from 'selectors/firebase/auth/getUserEmailFromFb';
import { Link } from 'react-router-dom';
import { Url } from 'consts/urls';
import { updateEmail } from 'actions/firebase/updateEmail';

export const ChangeEmailBlock = () => {
  const userEmail = useSelector(getUserEmailFromFb);
  const dispatch = useDispatch();
  const methods = useForm();
  const { handleSubmit } = methods;

  const onSubmit = ({ emailAddress }, e) => {
    e.preventDefault();

    dispatch(updateEmail(emailAddress));
  };

  return (
    <div className="accountForm">
      <h2 className="accountForm-title">Change Email</h2>
      <FormContext {...methods}>
        <form
          onSubmit={handleSubmit(onSubmit)}
        >
          <SettingsInputField
            label="Email Address"
            name="emailAddress"
            validator={EMAIL_ADDRESS_VALIDATOR}
            initialValue={userEmail}
            errorMessage="Invalid Email"
            isRequired
          />
          <div className="accountForm-actionButtons">
            <button
              className="accountForm-submit"
              type="submit"
            >
              Change Email Address
            </button>
            <Link to={Url.forgotPassword()}>Don&apos;t you prefer recovering your password?</Link>
          </div>
        </form>
      </FormContext>
    </div>
  );
};
