import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { buildAvatarClass } from 'utils/buildAvatarClass';
import { buildAvatarInitials } from 'utils/buildAvatarInitials';
import { useSelector } from 'react-redux';
import { getUserNameFromFb } from 'selectors/firebase/getUserNameFromFb';
import { getUserPhotoFromFb } from 'selectors/firebase/getUserPhotoFromFb';
import { avatarPlaceholderSize } from 'consts/avatarPlaceholderSizes';

export const AvatarPlaceholder = ({
  id, className, size, onClick, onKeyDown
}) => {
  const userFullName = useSelector(getUserNameFromFb);
  const userPhotoURL = useSelector(getUserPhotoFromFb);

  const initials = buildAvatarInitials(userFullName);

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
      <span className="avatarPlaceholder_initials">{initials}</span>
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
