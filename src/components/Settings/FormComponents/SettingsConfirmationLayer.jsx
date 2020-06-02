import React from 'react';
import PropTypes from 'prop-types';

export const SettingsConfirmationLayer = ({ onConfirm, onReject }) => (
  <div className="settingsConfirmationLayer-box">
    <p className="settingsConfirmationLayer-paragraph">Do you really want to delete your account?</p>
    <div className="settingsConfirmationLayer-confirmationButtons">
      <button
        className="settingsConfirmationLayer-button settingsConfirmationLayer-confirm"
        type="button"
        onClick={onConfirm}
      >
        Confirm
      </button>
      <button
        className="settingsConfirmationLayer-button settingsConfirmationLayer-reject"
        type="button"
        onClick={onReject}
      >
        Keep growing with FFL
      </button>
    </div>
  </div>
);

SettingsConfirmationLayer.defaultProps = {
  onConfirm: () => {},
  onReject: () => {}
};

SettingsConfirmationLayer.propTypes = {
  onConfirm: PropTypes.func,
  onReject: PropTypes.func
};
