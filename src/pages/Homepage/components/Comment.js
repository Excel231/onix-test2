import React, { useEffect } from 'react';
import '../sass/Comment.scss';
import PropType from 'prop-types';
import Aos from 'aos';
import commentsMapping from '../../../helper/commentsMapping';

const Comment = ({
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
            src={commentsMapping[photoName]}
            alt={fullName}
          />
          <h3 className="comment-name">{fullName}</h3>
        </li>
        <li className="comment-text">
          <i>{text}</i>
        </li>
      </ul>
    </div>
  );
};

Comment.propTypes = {
  fullName: PropType.string.isRequired,
  photoName: PropType.string.isRequired,
  text: PropType.string.isRequired,
  styleType: PropType.string.isRequired
};

export default Comment;
