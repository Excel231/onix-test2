import React from 'react';
import { Link } from 'react-router-dom';
import PropType from 'prop-types';
import '../styles.scss';

const BigRedLinkButton = ({ children }) => {
  return (
    <Link
      className="big-red-btn"
      to="/biography"
    >
      { children }
    </Link>
  );
};

BigRedLinkButton.propTypes = {
  children: PropType.node.isRequired
};

export default BigRedLinkButton;
