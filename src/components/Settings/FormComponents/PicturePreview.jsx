import React from 'react';
import PropTypes from 'prop-types';

export const PicturePreview = ({ pictureUrl }) => (
  <img
    src={pictureUrl}
    alt="new avatar preview"
    width="50%"
  />
);

PicturePreview.propTypes = {
  pictureUrl: PropTypes.string.isRequired
};
