import { getRoundedKCal } from 'utils/getRoundedKCals';

describe('getRoundedKCal util', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should return 0 if no arguments are passed', () => {
    expect(getRoundedKCal()).toBe(0);
  });

  it('should compute macros and return roundedKCals when vals are passed', () => {
    expect(getRoundedKCal({ p: 111, ch: 222, f: 333 })).toBe(4329);
  });

  it('should compute macros even though macros keys do not match', () => {
    expect(getRoundedKCal({ t: 999 })).toBe(0);
  });

  it('should compute macros even though macros keys do not exactly match', () => {
    expect(getRoundedKCal({ p: 111.98, ch: 222.23, t: 999.03 })).toBe(1337);
  });
});
