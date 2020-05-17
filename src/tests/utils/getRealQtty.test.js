import { getRealQtty } from 'utils/getRealQtty';

describe('getRealQtty util', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should compute quantity with any value as eq and qtty', () => {
    expect(getRealQtty(1, 20)).toBe(0.2);
  });

  it('should return 0 if no args are passed as default value', () => {
    expect(getRealQtty()).toBe(0);
  });
});
