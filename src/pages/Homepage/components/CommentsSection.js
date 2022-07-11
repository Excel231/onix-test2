import React, { useEffect } from 'react';
import i18next from 'i18next';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { COMMENTS_API_LINK_ENG, COMMENTS_API_LINK_RUS, COMMENTS_API_LINK_UKR } from '../../../constants/constants';
import { useThemeColorContext } from '../../../context/ThemeColorProvider';
import CommentsSectionView from './CommentsSectionView';
import setCommentsArr from '../../../store/comments/commentsActions';

const CommentsSection = () => {
  const darkThemeOn = useThemeColorContext() ?? true;

  const commentsArr = useSelector(({ commentsReducer }) => commentsReducer.comments);

  const dispatch = useDispatch();

  const getCommentSectionAPI = (lng) => {
    switch (lng) {
      case ('en'):
        return COMMENTS_API_LINK_ENG;
      case ('ru'):
        return COMMENTS_API_LINK_RUS;
      case ('ukr'):
        return COMMENTS_API_LINK_UKR;
      default:
        return COMMENTS_API_LINK_ENG;
    }
  };

  const getCommentSection = () => {
    axios.get(getCommentSectionAPI(localStorage.getItem('lng') ?? i18next.language))
      .then((res) => {
        dispatch(setCommentsArr(res.data));
      });
  };

  useEffect(() => {
    getCommentSection();
    i18next.on('languageChanged', getCommentSection);
    return () => i18next.off('languageChanged', getCommentSection);
  }, []);

  return (
    <CommentsSectionView darkThemeOn={darkThemeOn} comments={commentsArr} />
  );
};

export default CommentsSection;
