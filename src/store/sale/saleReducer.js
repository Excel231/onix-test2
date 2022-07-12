import SET_SALE_FINISHED from './saleTypes';

export const initialState = {
  saleFinished: false
};

// eslint-disable-next-line default-param-last
const manageSale = (state = initialState, action) => {
  switch (action.type) {
    case SET_SALE_FINISHED:
      return { ...state, saleFinished: true };
    default:
      return state;
  }
};

export default manageSale;
