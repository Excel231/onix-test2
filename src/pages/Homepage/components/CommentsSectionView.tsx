import React from 'react';
import { useTranslation } from 'react-i18next';
import CommentView from './CommentView';
import '../sass/CommentsSection.scss';
import { Comment } from '../../../types/Interfaces';

interface Props {
  comments: Comment[];
  darkThemeOn: boolean;
}

const CommentsSectionView: React.FC<Props> = ({
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
          <CommentView
            key={id}
            fullName={fullName}
            photoName={photoName}
            text={text}
            styleType={
            `${+id % 2 === 0 ? 'left-aligned' : 'right-aligned'}
             ${darkThemeOn ? '' : 'light-theme-comment'}`
            }
          />
        );
      })}
    </div>
  );
};

export default CommentsSectionView;
