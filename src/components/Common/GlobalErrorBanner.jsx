import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeGlobalError } from 'actions/globalErrors/removeGlobalError';
import { applyKeyboardNavigation } from 'utils/applyKeyboardNavigation';
import { R_KEY_CODE } from 'consts/keyboard-key-codes';
import { RemoveIcon } from './Icons/RemoveIcon';

export const GlobalErrorBanner = ({ message }) => {
  const dispatch = useDispatch();

  // eslint-disable-next-line no-shadow
  const handleClick = (message) => {
    dispatch(removeGlobalError({ message }));
  };

  return (
    <div className="globalErrorBanner">
      {message}
      <RemoveIcon
        ariaLabel="Press R Keyboard Key to remove food from your diet"
        className="globalErrorBanner-cross"
        onClick={() => handleClick(message)}
        onKeyDown={
          (e) => applyKeyboardNavigation(e, R_KEY_CODE, () => handleClick(message))
        }
      />
    </div>
  );
};

GlobalErrorBanner.propTypes = {
  message: PropTypes.string.isRequired
};
