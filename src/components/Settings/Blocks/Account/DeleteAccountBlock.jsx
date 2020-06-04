import React, { useState } from 'react';
import { useForm, FormContext } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { SettingsCheckbox } from 'components/Settings/FormComponents/SettingsCheckbox';
import { deleteAccount } from 'actions/firebase/deleteAccount';
import { SettingsConfirmationLayer } from 'components/Settings/FormComponents/SettingsConfirmationLayer';

export const DeleteAccountBlock = () => {
  const dispatch = useDispatch();
  const methods = useForm();
  const { handleSubmit } = methods;
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);

  const onSubmit = (values, e) => {
    e.preventDefault();

    if (!isConfirmed) {
      setShowDeleteConfirmation(true);
    }
  };

  const handleConfirmation = (userResponse) => {
    if (userResponse) {
      dispatch(deleteAccount());
    } else {
      setIsConfirmed(false);
    }

    setShowDeleteConfirmation(false);
  };

  return (
    <div className="accountForm">
      {showDeleteConfirmation && (
        <SettingsConfirmationLayer
          onConfirm={() => handleConfirmation(true)}
          onReject={() => handleConfirmation(false)}
        />
      )}
      <FormContext {...methods}>
        <form
          onSubmit={handleSubmit(onSubmit)}
        >
          <h2 className="accountForm-title deleteAccount-title">Delete Account</h2>
          <SettingsCheckbox
            checkboxParagraph="By deleting the account you will not be able to access the platform with your credentials and we compromise all your data  will be removed."
            label="Delete Account"
            name="deleteAccount"
            isRequired
          />
          <button
            className="accountForm-submit deleteAccount-submit"
            type="submit"
          >
            Delete Account
          </button>
        </form>
      </FormContext>
    </div>
  );
};
