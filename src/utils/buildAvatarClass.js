export const buildAvatarClass = (id = '') => {
  let numberFromId = Number(id.replace(/\D/g, '').slice(-5));
  numberFromId %= 12;
  return `avatarPlaceholder-${numberFromId}`;
};
