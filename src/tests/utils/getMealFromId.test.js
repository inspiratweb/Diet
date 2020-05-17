import { getMealFromId } from 'utils/getMealFromId';

describe('getMealFromId util', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should return empty object if no arguments are passed', () => {
    expect(getMealFromId()).toStrictEqual({});
  });

  it('should return "food" if "meals" contains id key', () => {
    expect(getMealFromId('id', {
      id: {
        food: '',
        qtty: 0,
      }
    })).toStrictEqual({
      food: '',
      qtty: 0,
    });
  });

  it('should return undefined if "id" argument is not  present  in "meals" argument', () => {
    expect(getMealFromId('id', {
      food: '',
      qtty: 0,
    })).toStrictEqual({});
  });
});
