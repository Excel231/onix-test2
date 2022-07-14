import SET_SALE_FINISHED from './saleTypes';

interface ReducerType {
  saleFinished: boolean;
}

interface ActionType {
  type: string;
}

export const initialState: ReducerType = {
  saleFinished: false
};

// eslint-disable-next-line default-param-last
const manageSale = (state = initialState, action: ActionType): ReducerType => {
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
