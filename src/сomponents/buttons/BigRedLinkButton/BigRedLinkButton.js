import React from 'react';
import { Link } from 'react-router-dom';
import PropType from 'prop-types';
import BigRedAnchorButton from '../BigRedAnchorButton/BigRedAnchorButton';
import '../styles.css';

function BigRedLinkButton({ children }) {
  return (
    <Link
      className="big-red-btn"
      to="/biography"
    >
      {children}
    </Link>
  );
}

BigRedAnchorButton.propTypes = {
  children: PropType.any
};

export default BigRedLinkButton;
