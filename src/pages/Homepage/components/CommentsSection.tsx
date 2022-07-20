import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useThemeColorContext } from '../../../context/ThemeColorProvider';
import CommentsSectionView from './CommentsSectionView';
import { changeComments } from '../../../store/comments/commentsActions';
import { CommentsSelectorType, LanguageSelectorType } from '../../../types/Interfaces';

const CommentsSection = () => {
  const darkThemeOn = useThemeColorContext() ?? true;
  const commentsArr = useSelector(({ commentsReducer }: CommentsSelectorType) => commentsReducer.comments);
  const language = useSelector(({ languageReducer }: LanguageSelectorType) => languageReducer.language);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(changeComments(language) as any);
  }, [language]);

  return (
    <CommentsSectionView darkThemeOn={darkThemeOn} comments={commentsArr} />
  );
};

export default CommentsSection;
