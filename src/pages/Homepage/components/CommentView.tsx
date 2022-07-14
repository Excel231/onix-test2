import React, { useEffect } from 'react';
import '../sass/Comment.scss';
import Aos from 'aos';
import commentsMapping from '../../../helper/commentsMapping';

interface Props {
  fullName: string;
  photoName: string;
  text: string
  styleType: string
}

const CommentView: React.FC<Props> = ({
  fullName,
  photoName,
  text,
  styleType
}) => {
  useEffect(() => {
    Aos.init({ duration: 750 });
  }, []);
  return (
    <div data-aos="fade-up">
      <ul className={`comment-list ${styleType}`}>
        <li className="comment-preview">
          <img
            className="comment-photo"
            src={commentsMapping[photoName as keyof typeof commentsMapping]}
            alt={fullName}
          />
          <h3 className="comment-name">{fullName}</h3>
        </li>
        <li className="comment-text">
          <i>{`"${text}"`}</i>
        </li>
      </ul>
    </div>
  );
};

export default CommentView;
