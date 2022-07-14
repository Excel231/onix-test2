import { SET_COMMENTS, LOADING_COMMENTS } from './commentsTypes';

interface ReducerType {
    comments: Comment[];
    loading: boolean;
}

interface ActionType {
    type: string;
    comments?: Comment[];
    loading?: boolean;
}

export const initialState: ReducerType = {
  comments: [],
  loading: false
};

// eslint-disable-next-line default-param-last
const manageComments = (state = initialState, action: ActionType): ReducerType => {
  switch (action.type) {
    case SET_COMMENTS:
      return {
        ...state,
        comments: action.comments!
      };
    case LOADING_COMMENTS:
      return {
        ...state,
        loading: action.loading!
      };
    default:
      return state;
  }
};

export default manageComments;
