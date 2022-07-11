import SET_COMMENTS from './commentsTypes';

export const initialState = {
  comments: []
};

// eslint-disable-next-line default-param-last
const manageComments = (state = initialState, action) => {
  switch (action.type) {
    case SET_COMMENTS:
      return { ...state, comments: action.commentsArr };
    default:
      return state;
  }
};

export default manageComments;
