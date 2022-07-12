import HIDE_DISCOUNT_MODAL from './discountModalTypes';

export const initialState = {
  discountModalVisible: true
};

// eslint-disable-next-line default-param-last
const manageDiscountModal = (state = initialState, action) => {
  switch (action.type) {
    case HIDE_DISCOUNT_MODAL:
      return { ...state, discountModalVisible: false };
    default:
      return state;
  }
};

export default manageDiscountModal;
