import SET_SALE_FINISHED from './saleTypes';

export const initialState: {
  saleFinished: boolean;
} = {
  saleFinished: false
};

interface ActionType {
    type: string;
}

// eslint-disable-next-line default-param-last
const manageSale = (state = initialState, action: ActionType) => {
  switch (action.type) {
    case SET_SALE_FINISHED:
      return {
        ...state,
        saleFinished: true
      };
    default:
      return state;
  }
};

export default manageSale;
