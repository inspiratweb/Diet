import { getSimilarFoods } from 'utils/getSimilarFoods';

describe('getSimilarFoods util', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should compute quantity with any value as eq and qtty', () => {
    expect(getSimilarFoods(
      { food: 'default', qtty: 5},
      {
        default: {
          code: 'default',
          desc: 'default',
          skipGrams: true,
          macros: {
            ch: 0, chs: 0, f: 92, fs: 14, p: 0
          }
        }
      },
      [['default'], ['default']]
    )).toStrictEqual([]);
  });

  it('should return false if no args are passed', () => {
    expect(getSimilarFoods()).toBe(false);
  });
});
