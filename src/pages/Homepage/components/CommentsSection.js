import React, { useEffect, useState } from 'react';
import i18next from 'i18next';
import CommentsSectionView from './CommentsSectionView';
import { COMMENTS_API_LINK_ENG, COMMENTS_API_LINK_RUS } from '../../../constants/constants';
import { useThemeColorContext } from '../../../context/ThemeColorProvider';

const CommentsSection = () => {
  const [comments, setComments] = useState([]);

  const darkThemeOn = useThemeColorContext() ?? true;

  const getCommentSectionAPI = (lng) => {
    switch (lng) {
      case ('en'):
        return COMMENTS_API_LINK_ENG;
      case ('ru'):
        return COMMENTS_API_LINK_RUS;
      case ('ukr'):
        // I've run out of free APIs :(
        return COMMENTS_API_LINK_RUS;
      default:
        return 'en';
    }
  };

  const getCommentSection = () => {
    fetch(getCommentSectionAPI(localStorage.getItem('lng') ?? i18next.language))
      .then((res) => res.json())
      .then((data) => setComments(data));
  };

  useEffect(() => {
    getCommentSection();
    i18next.on('languageChanged', getCommentSection);
    return () => i18next.off('languageChanged', getCommentSection);
  }, []);

  return (
    <CommentsSectionView darkThemeOn={darkThemeOn} comments={comments} />
  );
};

export default CommentsSection;
