import { AnyAction } from 'redux';
import axios from 'axios';
import { SET_COMMENTS, LOADING_COMMENTS } from './commentsTypes';
import getLanguageApiLink from '../../helper/getLanguageApiLink';

type dispatchType = (arg: AnyAction) => any;

export const setComments = (comments: Comment[]) => ({ type: SET_COMMENTS, comments });
export const loadingComments = () => ({ type: LOADING_COMMENTS, loading: true });
export const stopLoadingComments = () => ({ type: LOADING_COMMENTS, loading: false });
export const changeComments = (language: string) => {
  return (dispatch: dispatchType) => {
    dispatch(loadingComments());
    const lngApi = getLanguageApiLink(language);
    axios
      .get<Comment[]>(lngApi)
      .then((res) => dispatch(setComments((res.data))))
      .then(() => dispatch(stopLoadingComments()));
  };
};
