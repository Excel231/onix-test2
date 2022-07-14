import { SET_COMMENTS, LOADING_COMMENTS } from './commentsTypes';

export const setComments = (comments: Comment[]) => ({ type: SET_COMMENTS, comments });
export const loadingComments = () => ({ type: LOADING_COMMENTS, loading: true });
export const stopLoadingComments = () => ({ type: LOADING_COMMENTS, loading: false });
