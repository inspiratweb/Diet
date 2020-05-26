import { isPathInUrl } from 'utils/isPathInUrl';
import { Url } from 'consts/urls';

describe('isPathInUrl', () => {
  let pathname = '';
  let parameter = '';
  let avatarClass = false;

  describe('when the pathname and parameter are empty', () => {
    beforeAll(() => {
      avatarClass = isPathInUrl(pathname, parameter);
    });

    it('returns true when there is no pathname nor parameter', () => {
      expect(avatarClass).toBe(false);
    });
  });

  describe('when parameter is not present in the url', () => {
    beforeAll(() => {
      pathname = '/diet/biulder';
      parameter = Url.auth();
      avatarClass = isPathInUrl(pathname, parameter);
    });
    it('', () => {
      expect(avatarClass).toBe(false);
    });
  });

  describe('When parameter is present, totally or partially', () => {
    beforeAll(() => {
      pathname = Url.signUp();
      parameter = Url.auth();
      avatarClass = isPathInUrl(pathname, parameter);
    });
    it('returns true if parameter is present in Url', () => {
      expect(avatarClass).toBe(true);
    });
  });
});
