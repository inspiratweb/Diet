import { getFoodSummary } from 'utils/getFoodSummary';

describe('getFoodSummary util', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  const mockArguments = {
    meals: [{
      food: 'Breakfast',
      qtty: 1,
    }],
    foods: {
      Breakfast: {
        code: 123,
        desc: 2,
      }
    }
  };

  it('should return food Summary', () => {
    expect(getFoodSummary(mockArguments)).toStrictEqual([123]);
  });

  it('should return empty string if no arguments are passed', () => {
    expect(getFoodSummary()).toStrictEqual([]);
  });
});
