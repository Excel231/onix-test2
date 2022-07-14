import React, { useEffect } from 'react';
import i18next from 'i18next';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { COMMENTS_API_LINK_ENG, COMMENTS_API_LINK_RUS, COMMENTS_API_LINK_UKR } from '../../../constants/constants';
import { useThemeColorContext } from '../../../context/ThemeColorProvider';
import CommentsSectionView from './CommentsSectionView';
import { setComments, loadingComments, stopLoadingComments } from '../../../store/comments/commentsActions';
import { CommentsSelectorType, LanguageSelectorType } from '../../../types/Interfaces';

const CommentsSection = () => {
  const darkThemeOn = useThemeColorContext() ?? true;
  const commentsArr = useSelector(({ commentsReducer }: CommentsSelectorType) => commentsReducer.comments);
  const language = useSelector(({ languageReducer }: LanguageSelectorType) => languageReducer.language);
  const dispatch = useDispatch();

  const getCommentSectionAPI = (lng: string) => {
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
    dispatch(loadingComments());
    axios.get(getCommentSectionAPI(language) ?? i18next.language)
      .then((res) => {
        dispatch(setComments(res.data));
      })
      .then(() => dispatch(stopLoadingComments()));
  };

  useEffect(() => {
    getCommentSection();
  }, [language]);

  return (
    <CommentsSectionView darkThemeOn={darkThemeOn} comments={commentsArr} />
  );
};

export default CommentsSection;
