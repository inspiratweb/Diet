import React from 'react';
import { useSelector } from 'react-redux';
import { getGlobalErrors } from 'selectors/globalErrors/getGlobalErrors';
import { GlobalErrorBanner } from './GlobalErrorBanner';

export const GlobalErrors = () => {
  const globalErrors = useSelector(getGlobalErrors);

  return globalErrors.map(
    (message) => <GlobalErrorBanner key={message} message={message} />
  );
};
