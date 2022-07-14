import HIDE_DISCOUNT_MODAL from './discountModalTypes';

interface ReducerType {
  discountModalVisible: boolean;
}

interface ActionType {
  type: string;
}

export const initialState: ReducerType = {
  discountModalVisible: true
};

// eslint-disable-next-line default-param-last
const manageDiscountModal = (state = initialState, action: ActionType): ReducerType => {
  switch (action.type) {
    case HIDE_DISCOUNT_MODAL:
      return { ...state, discountModalVisible: false };
    default:
      return state;
  }
};

export default manageDiscountModal;
