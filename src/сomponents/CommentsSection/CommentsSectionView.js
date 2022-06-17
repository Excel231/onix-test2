import React from 'react';
import PropType from 'prop-types';
import Comment from '../Comment/Comment';
import './styles.css';

function CommentsSectionView({ comments }) {
  return (
    <div className="comment-container">
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
