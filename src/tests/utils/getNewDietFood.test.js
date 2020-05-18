import { getNewDietFood } from 'utils/getNewDietFood';

describe('getNewDietFood util', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should compute newDietFood with any value passed', () => {
    expect(getNewDietFood({ meal: [{food: 'IamAFood' }]}, 'meal', 'IamAFood')).toStrictEqual({food: 'IamAFood'});
  });

  it('should return {} if no args are passed as default value', () => {
    expect(getNewDietFood()).toStrictEqual({});
  });
});
