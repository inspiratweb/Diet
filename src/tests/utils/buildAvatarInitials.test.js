import { buildAvatarInitials } from 'utils/buildAvatarInitials';

describe('buildAvatarInitials', () => {
  let name = '';
  let avatarInitials = '';

  describe('when we have name and surname', () => {
    beforeAll(() => {
      name = 'Michael Knight';
      avatarInitials = buildAvatarInitials(name);
    });
    it('builds initials with the first letter of the name and surname', () => {
      expect(avatarInitials).toBe('MK');
    });
  });

  describe('when we have not name nor surname', () => {
    beforeAll(() => {
      name = '';
      avatarInitials = buildAvatarInitials(name);
    });
    it('builds empty initials', () => {
      expect(avatarInitials).toBe('');
    });
  });

  describe('when we have only name but not surname', () => {
    beforeAll(() => {
      name = 'Michael';
      avatarInitials = buildAvatarInitials(name);
    });
    it('builds initials with only the first letter of the name', () => {
      expect(avatarInitials).toBe('M');
    });
  });

  describe('when we have only the surname but not the name', () => {
    beforeAll(() => {
      name = 'Michael M Knight';
      avatarInitials = buildAvatarInitials(name);
    });
    it('builds initials with only the first letter of the surname', () => {
      expect(avatarInitials).toBe('MK');
    });
  });
});
