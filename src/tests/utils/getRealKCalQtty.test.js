import { getRealKCalQtty } from 'utils/getRealKCalQtty';

describe('getRealKCalQtty util', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should compute quantity with any value as eq and qtty', () => {
    expect(getRealKCalQtty({ macros: { p: 0, ch: 1, f: 3 }}, 20)).toBe(620);
  });

  it('should return 0 if no args are passed as default value', () => {
    expect(getRealKCalQtty()).toBe(0);
  });
});
