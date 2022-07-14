import { SET_COMMENTS, LOADING_COMMENTS } from './commentsTypes';

export const initialState = {
  comments: [],
  loading: false
};

// eslint-disable-next-line default-param-last
const manageComments = (state = initialState, action) => {
  switch (action.type) {
    case SET_COMMENTS:
      return { ...state, comments: action.comments };
    case LOADING_COMMENTS:
      return { ...state, loading: action.loading };
    default:
      return state;
  }
};

export default manageComments;
