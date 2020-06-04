import { getMacrosFromMeal } from 'utils/getMacrosFromMeal';

describe('getMacrosFromMeal util', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  const mockMeal = [{food: 'default', qtty: 0}];
  const mockFoods = {
    default: {
      code: 'default',
      desc: 'default',
      macros: {
        ch: 0, chs: 0, f: 0, fs: 0, p: 0
      }
    }
  };

  it('should return "mockMacros" if no arguments are passed', () => {
    expect(getMacrosFromMeal()).toStrictEqual({p: 0, ch: 0, f: 0});
  });

  it('should compute macros and return KCals when vals are 0', () => {
    expect(getMacrosFromMeal(mockMeal, mockFoods)).toStrictEqual({ch: 0, f: 0, p: 0});
  });

  it('should compute macros and return KCals when vals are high', () => {
    expect(getMacrosFromMeal([{food: 'default', qtty: 10}], {
      default: {
        code: 'default',
        desc: 'default',
        macros: {
          ch: 10, f: 30, p: 80
        }
      }
    })).toStrictEqual({
      ch: 1,
      f: 3,
      p: 8,
    });
  });

  it('should compute macros eventhough KCals do not match', () => {
    expect(
      getMacrosFromMeal([{food: 'foo', qtty: 0}], {
        default: {
          code: 'default',
          desc: 'default',
          macros: {
            ch: 0, chs: 0, f: 0, fs: 0, p: 0
          }
        }
      })
    ).toStrictEqual({ch: 0, f: 0, p: 0});
  });
});
