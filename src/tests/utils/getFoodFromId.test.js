import { getFoodFromId } from 'utils/getFoodFromId';

describe('getFoodFromId util', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should return empty object if no arguments are passed', () => {
    expect(getFoodFromId()).toStrictEqual({});
  });

  it('should return "id" if "foods" contains id key', () => {
    expect(getFoodFromId('id', { id: true })).toBe(true);
  });

  it('should return undefined if "id" argument is not  present  in "foods" argument', () => {
    expect(getFoodFromId('id', { foo: true })).toStrictEqual({});
  });
});
