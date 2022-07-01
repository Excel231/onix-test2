import React, { useEffect, useState } from 'react';
import CommentsSectionView from './CommentsSectionView';
import { COMMENTS_API_LINK } from '../../../constants/constants';
import { useThemeColorContext } from '../../../context/ThemeColorProvider';

const CommentsSection = () => {
  const [comments, setComments] = useState([]);

  const darkThemeOn = useThemeColorContext() ?? true;

  useEffect(() => {
    fetch(COMMENTS_API_LINK)
      .then((res) => res.json())
      .then((data) => setComments(data));
  }, []);

  return (
    <CommentsSectionView darkThemeOn={darkThemeOn} comments={comments} />
  );
};

export default CommentsSection;
