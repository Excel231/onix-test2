import React from 'react';
import PropType from 'prop-types';
import Comment from '../../../сomponents/Comment/Comment';
import '../sass/CommentsSection.scss';

function CommentsSectionView({ comments }) {
  return (
    <div id="comment-section">
      <h2 className="section-title">Comments from famous people</h2>
      {comments.map(({
        id,
        fullName,
        photoName,
        text
      }) => {
        return (
          <Comment
            key={id}
            fullName={fullName}
            photoName={photoName}
            text={text}
            styleType={id % 2 === 0 ? 'left-aligned' : 'right-aligned'}
          />
        );
      })}
    </div>
  );
}

CommentsSectionView.propTypes = {
  comments: PropType.arrayOf(PropType.shape({})).isRequired
};

export default CommentsSectionView;
