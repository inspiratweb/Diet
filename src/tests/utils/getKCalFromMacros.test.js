import { getKCalFromMacros } from 'utils/getKCalFromMacros';

describe('getKCalFromMacros util', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  const mockMacros = { p: 0, ch: 0, f: 0 };

  it('should return "mockMacros" if no arguments are passed', () => {
    expect(getKCalFromMacros()).toStrictEqual(mockMacros);
  });

  it('should compute macros and return KCals when vals are 0', () => {
    expect(getKCalFromMacros(mockMacros)).toStrictEqual(mockMacros);
  });

  it('should compute macros and return KCals when vals are high', () => {
    expect(getKCalFromMacros({ p: 111, ch: 222, f: 333 })).toStrictEqual({
      ch: 888,
      f: 2997,
      p: 444
    });
  });

  it('should compute macros eventhough KCals do not match', () => {
    expect(getKCalFromMacros({ t: 999 })).toStrictEqual(mockMacros);
  });
});
