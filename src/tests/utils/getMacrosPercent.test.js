import { getMacrosPercent } from 'utils/getMacrosPercent';

describe('getMacrosPercent util', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  const mockMacros = { p: 0, ch: 0, f: 0 };

  it('should return "mockMacros" if no arguments are passed', () => {
    expect(getMacrosPercent()).toStrictEqual(mockMacros);
  });

  it('should compute macros and return 0 Percentage when vals are 0', () => {
    expect(getMacrosPercent(mockMacros)).toStrictEqual(mockMacros);
  });

  it('should compute macros and return KCals when vals are high', () => {
    expect(getMacrosPercent({ p: 111, ch: 222, f: 333 })).toStrictEqual({
      ch: 0.20512820512820512,
      f: 0.6923076923076923,
      p: 0.10256410256410256,
    });
  });

  it('should compute macros eventhough KCals do not match', () => {
    expect(getMacrosPercent({ t: 999 })).toStrictEqual(mockMacros);
  });
});
