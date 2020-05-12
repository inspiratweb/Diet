// TODO Redesign 404 page
import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { BlankSlate } from './BlankSlate';

export const NoMatchPage = () => {
  const history = useHistory();

  useEffect(() => {
    setTimeout(() => {
      history.push('/');
    }, 3000);
  });

  return (
    <>
      <BlankSlate />
      <div className="noMatchPage">
        UPS! Something went wrong!
        {' '}
        <span className="noMatchPage-shrug">¯\_(ツ)_/¯</span>
        <br />
        Looks like the URL you are trying to visit does not exist.
        <br />
        <br />
        Redirecting to the Home Page
      </div>
    </>
  );
};
