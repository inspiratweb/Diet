import { getCoordinatesForPercent } from 'utils/getCoordinatesForPercent';

describe('getCoordinatesForPercent util', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should compute percentage with any value as percentage', () => {
    expect(getCoordinatesForPercent(1)).toStrictEqual([1, -2.4492935982947064e-16]);
  });

  it('should return [1,0] if no percentage  is passed', () => {
    expect(getCoordinatesForPercent()).toStrictEqual([1, 0]);
  });
});
