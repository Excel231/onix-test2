import React from 'react';
import { Link } from 'react-router-dom';
import PropType from 'prop-types';
import '../Buttons.scss';

const BigRedLinkButton = ({ children, path }) => {
  return (
    <Link
      className="big-red-btn"
      to={path}
    >
      { children }
    </Link>
  );
};

BigRedLinkButton.propTypes = {
  children: PropType.node.isRequired,
  path: PropType.node.isRequired
};

export default BigRedLinkButton;
