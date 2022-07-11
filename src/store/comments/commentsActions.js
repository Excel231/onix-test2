import { SET_COMMENTS, LOADING_COMMENTS } from './commentsTypes';

export const setComments = (commentsArr) => ({ type: SET_COMMENTS, commentsArr });
export const loadingComments = () => ({ type: LOADING_COMMENTS, load: true });
export const stopLoadingComments = () => ({ type: LOADING_COMMENTS, load: false });
