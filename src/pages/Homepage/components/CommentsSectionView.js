import React from 'react';
import PropType from 'prop-types';
import { useTranslation } from 'react-i18next';
import Comment from './Comment';
import '../sass/CommentsSection.scss';

const CommentsSectionView = ({
  darkThemeOn,
  comments
}) => {
  const { t } = useTranslation('', { keyPrefix: 'homepage' });

  return (
    <div id="comment-section" className={darkThemeOn ? 'dark-theme-comments' : 'light-theme-comments'}>
      <h2 className="section-title">{t('commentsHeading')}</h2>
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
            styleType={
            `${id % 2 === 0 ? 'left-aligned' : 'right-aligned'}
             ${darkThemeOn ? '' : 'light-theme-comment'}`
            }
          />
        );
      })}
    </div>
  );
};

CommentsSectionView.propTypes = {
  comments: PropType.arrayOf(PropType.shape({})).isRequired,
  darkThemeOn: PropType.bool.isRequired
};

export default CommentsSectionView;
