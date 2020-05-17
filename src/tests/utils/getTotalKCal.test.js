import { getTotalKCal } from 'utils/getTotalKCal';

describe('getTotalKCal util', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should return 0 if no arguments are passed', () => {
    expect(getTotalKCal()).toBe(0);
  });

  it('should compute macros and return totalKCals when vals are passed', () => {
    expect(getTotalKCal({ p: 111, ch: 222, f: 333 })).toBe(4329);
  });

  it('should compute macros even though macros keys do not match', () => {
    expect(getTotalKCal({ t: 999 })).toBe(0);
  });

  it('should compute macros even though macros keys do not exactly match', () => {
    expect(getTotalKCal({ p: 111, ch: 222, t: 999 })).toBe(1332);
  });
});
