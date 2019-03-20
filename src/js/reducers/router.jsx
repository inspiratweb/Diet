export default (state = '', action) => {
  const { type, payload } = action;
  switch (type) {
    case 'SET_ROUTER':
      return payload.replace(/\//g, '');
    default:
      return state;
  }
};
