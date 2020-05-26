export const buildAvatarInitials = (fullName = '') => {
  // eslint-disable-next-line no-param-reassign
  if (fullName === null) { fullName = 'New User'; }

  const name = fullName.split(' ');
  const [firstName, middleName, lastName] = name;
  let initials = '';
  if (firstName) initials += firstName[0];
  if (lastName) {
    initials += lastName[0];
  } else if (middleName) {
    initials += middleName[0];
  }
  return initials;
};
