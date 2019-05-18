export default (state = '', action) => {
  const { type, payload } = action;
  switch (type) {
    case 'SET_ROUTER':
      return payload;
    case 'FETCH_ROUTER':
      return payload;
    default:
      return state;
  }
};
