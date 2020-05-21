import React from 'react';
import { useForm, FormContext } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { EmailInput } from 'components/Auth/FormComponents/EmailInput';
import { resetPassword } from 'actions/firebase/resetPassword';

export const ForgotPasswordForm = () => {
  const methods = useForm();
  const { handleSubmit } = methods;

  const history = useHistory();
  const dispatch = useDispatch();

  const onSubmit = ({ email }, e) => {
    e.preventDefault();
    dispatch(resetPassword(email));
  };

  const handleCancel = () => {
    history.goBack();
  };

  return (
    <FormContext {...methods}>
      <form
        className="authForm"
        onSubmit={handleSubmit(onSubmit)}
      >
        <EmailInput />
        <div
          className="authForm-controlBtns"
        >
          <button
            className="authForm-submitBtn"
            type="submit"
          >
            Search
          </button>
          <button
            onClick={handleCancel}
            className="authForm-cancelBtn"
            type="button"
          >
            Cancel
          </button>
        </div>
      </form>
    </FormContext>
  );
};
