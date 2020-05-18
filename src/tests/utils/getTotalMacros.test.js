import { getTotalMacros } from 'utils/getTotalMacros';

describe('getTotalMacros util', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should return 0 if no arguments are passed', () => {
    expect(getTotalMacros()).toStrictEqual({ch: 0, f: 0, p: 0});
  });

  it('should compute macros and return totalKCals when vals are passed', () => {
    expect(getTotalMacros(
      { default: { desc: 'default', time: 11 }},
      {
        default: [{
          food: 'default',
          qtty: 9
        }]
      },
      {
        default: {
          code: 'default',
          desc: 'default',
          macros: {
            ch: 11, f: 92, p: 12
          }
        },
      },
    )).toStrictEqual({ch: 0.99, f: 8.28, p: 1.08});
  });
});
