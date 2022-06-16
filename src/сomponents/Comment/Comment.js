import React from 'react';
import './styles.css';
import PropType from 'prop-types';
import imageMapping from '../../helper/commnets-creation/imageMapping';

function Comment({
  fullName, photoName, text, styleType
}) {
  return (
    <ul className={`comment-list ${styleType}`}>
      <li className="comment-preview">
        <img
          className="comment-photo"
          src={imageMapping[photoName]}
          alt={fullName}
        />
        <h3 className="comment-name">{fullName}</h3>
      </li>
      <li className="comment-text">
        <i>{text}</i>
      </li>
    </ul>
  );
}

Comment.propTypes = {
  fullName: PropType.string.isRequired,
  photoName: PropType.string.isRequired,
  text: PropType.string.isRequired,
  styleType: PropType.string.isRequired
};

export default Comment;
