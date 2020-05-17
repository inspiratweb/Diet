import { getOrderedDiet } from 'utils/getOrderedDiet';

describe('getOrderedDiet util', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should return 0 if no arguments are passed', () => {
    expect(getOrderedDiet()).toStrictEqual({});
  });

  it('should compute Diet and return ordered Diets', () => {
    expect(getOrderedDiet(
      { default: [{food: 'default', qtty: 1}, {food: 'default', qtty: 6}, {food: 'default', qtty: 2}]},
      { foo: {desc: 'default', time: 11}, default: {desc: 'default', time: 2} }
    )).toStrictEqual({default: [{food: 'default', qtty: 1}, {food: 'default', qtty: 6}, {food: 'default', qtty: 2}]});
  });
});
