import { SET_COMMENTS, LOADING_COMMENTS } from './commentsTypes';

export const initialState = {
  comments: [],
  loading: false
};

interface ActionType {
  type: string;
  commentsArr: Comment[];
  load: boolean
}

// eslint-disable-next-line default-param-last
const manageComments = (state = initialState, action: ActionType) => {
  switch (action.type) {
    case SET_COMMENTS:
      return { ...state, comments: action.commentsArr };
    case LOADING_COMMENTS:
      return { ...state, loading: action.load };
    default:
      return state;
  }
};

export default manageComments;
