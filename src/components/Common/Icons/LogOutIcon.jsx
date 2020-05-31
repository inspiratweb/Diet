import React from 'react';
import PropTypes from 'prop-types';

export const LogOutIcon = ({ className }) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    width="14"
    height="14"
  >
    <defs>
      <image
        id="img1"
        width="14"
        height="14"
        href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAMAAAAolt3jAAAAAXNSR0IB2cksfwAAAFdQTFRFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADpeTbQAAAB10Uk5T7//wOABAEClvFj7ymQMmsNLi9v6bKLnb6fP5mBVTiXUnAAAATklEQVR4nGNgYIQAJmYWIGBgZIEARlZ8XFY2FC4LCzsHJzKXi5uHF8zl4xcQZBASZmQUAXNFxcQlJKUYYVyYYmleFKNkcFqE3VVMKF4AAJZ4A/ioiskYAAAAAElFTkSuQmCC"
      />
    </defs>
    <use id="Background" x="0" y="0" href="#img1" />
  </svg>
);

LogOutIcon.defaultProps = {
  className: ''
};

LogOutIcon.propTypes = {
  className: PropTypes.string
};
