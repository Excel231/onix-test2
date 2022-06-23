import React, { useEffect, useState } from 'react';
import CommentsSectionView from './CommentsSectionView';
import { COMMENTS_API_LINK } from '../../../constants/constants';

const CommentsSection = () => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetch(COMMENTS_API_LINK)
      .then((res) => res.json())
      .then((data) => setComments(data));
  }, []);

  return (
    <CommentsSectionView comments={comments} />
  );
};

export default CommentsSection;
