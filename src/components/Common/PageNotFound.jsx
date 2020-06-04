// TODO Redesign 404 page
import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import PageNotFoundImage from 'images/errors/404.png';
import { Url } from 'consts/urls';

export const PageNotFound = () => {
  const history = useHistory();

  useEffect(() => {
    setTimeout(() => {
      history.push(Url.index());
    }, 3000);
  });

  return (
    <>
      <div className="pageNotFound">
        <div className="pageNotFound-contentWrapper">
          <img className="pageNotFound-image" src={PageNotFoundImage} alt="404 Error, page not found" />
          <p className="pageNotFound-message">Looks like the URL you are trying to visit does not exist.</p>
          <p className="pageNotFound-redirect">Redirecting to our Home page...</p>
        </div>
      </div>
    </>
  );
};
