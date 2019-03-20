const similars = (state = [[]], action) => {
  const { type, payload } = action;
  switch (type) {
    case 'FETCH_SIMILARS':
      return payload;
    default:
      return state;
  }
};

export default similars;
