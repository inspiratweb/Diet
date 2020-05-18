import { applyKeyboardNavigation } from 'utils/applyKeyboardNavigation';
import { SPACE_KEY_CODE } from 'consts/keyboard-key-codes';

const MOCK_KEY_CODE = SPACE_KEY_CODE;
const callBackMock = jest.fn();
const mockEvent = {
  charCode: SPACE_KEY_CODE,
  eventCode: SPACE_KEY_CODE,
  preventDefault: jest.fn()
};

describe('applyKeyboardNavigation util', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should call callback when the', () => {
    applyKeyboardNavigation(mockEvent, MOCK_KEY_CODE, callBackMock);

    expect(mockEvent.preventDefault).toHaveBeenCalledTimes(1);
    expect(callBackMock).toHaveBeenCalledTimes(1);
  });

  it('should NOT call callback when no arguments are passed', () => {
    applyKeyboardNavigation();

    expect(callBackMock).toHaveBeenCalledTimes(0);
    expect(mockEvent.preventDefault).toHaveBeenCalledTimes(0);
  });

  it('should NOT call callback when keyCode is not the same as the expected one', () => {
    applyKeyboardNavigation(mockEvent, 1, callBackMock);

    expect(callBackMock).toHaveBeenCalledTimes(0);
    expect(mockEvent.preventDefault).toHaveBeenCalledTimes(0);
  });
});
