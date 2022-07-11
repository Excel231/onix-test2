import SET_BOXERS from './boxersTypes';

export const initialState = {
  boxers: []
};

// eslint-disable-next-line default-param-last
const manageBoxers = (state = initialState, action) => {
  switch (action.type) {
    case SET_BOXERS:
      return { ...state, boxers: action.boxersArr };
    default:
      return state;
  }
};

export default manageBoxers;
