import { buildAvatarClass } from 'utils/buildAvatarClass';

describe('buildAvatarClass', () => {
  let id = '';
  let avatarClass = '';

  describe('when the id is empty', () => {
    beforeAll(() => {
      id = '';
      avatarClass = buildAvatarClass(id);
    });
    it('builds a class avatarPlaceholder-0', () => {
      expect(avatarClass).toBe('avatarPlaceholder-0');
    });
  });

  describe('when the id is 5', () => {
    beforeAll(() => {
      id = '5';
      avatarClass = buildAvatarClass(id);
    });
    it('builds a class avatarPlaceholder-5 ', () => {
      expect(avatarClass).toBe('avatarPlaceholder-5');
    });
  });

  describe('when the id is higher than 11', () => {
    beforeAll(() => {
      id = '15';
      avatarClass = buildAvatarClass(id);
    });
    it('builds a class with an index under 11', () => {
      expect(avatarClass).toBe('avatarPlaceholder-3');
    });
  });
});
