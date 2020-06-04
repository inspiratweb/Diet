import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { buildAvatarClass } from 'utils/buildAvatarClass';
import { useSelector } from 'react-redux';
import { getUserPhotoFromFb } from 'selectors/firebase/profile/getUserPhotoFromFb';
import { avatarPlaceholderSize } from 'consts/avatarPlaceholderSizes';
import { getDisplayNameFromFb } from 'selectors/firebase/profile/getDisplayNameFromFb';

export const AvatarPlaceholder = ({
  id, className, size, onClick, onKeyDown
}) => {
  const userFullName = useSelector(getDisplayNameFromFb);
  const userPhotoURL = useSelector(getUserPhotoFromFb);

  return (
    <figure
      role="button"
      onClick={onClick}
      onKeyDown={onKeyDown}
      className={classNames(
        'avatarPlaceholder',
        buildAvatarClass(id),
        className,
        size,
      )}
    >
      {userPhotoURL && (
        <img
          alt={`${userFullName} avatar`}
          className="avatarPlaceholder_image"
          src={userPhotoURL}
        />
      )}
    </figure>
  );
};

AvatarPlaceholder.propTypes = {
  id: PropTypes.string,
  className: PropTypes.string,
  size: PropTypes.string,
  onClick: PropTypes.func,
  onKeyDown: PropTypes.func,
};

AvatarPlaceholder.defaultProps = {
  id: '0',
  className: '',
  size: avatarPlaceholderSize.medium,
  onClick: () => {},
  onKeyDown: () => {},
};
