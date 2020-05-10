export const getDietAvailable = state => (Object.keys(state.diet)).indexOf(state.router) >= 0;
