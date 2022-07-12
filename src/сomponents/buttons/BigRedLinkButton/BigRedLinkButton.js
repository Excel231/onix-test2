import React from 'react';
import { Link } from 'react-router-dom';
import PropType from 'prop-types';
import '../Buttons.scss';
import './BigRedLinkButton.scss';

const BigRedLinkButton = ({ children, path }) => {
  return (
    <Link
      className="big-red-btn link-btn"
      to={path}
    >
      { children }
    </Link>
  );
};

BigRedLinkButton.propTypes = {
  children: PropType.oneOfType([PropType.node, PropType.element]).isRequired,
  path: PropType.node.isRequired
};

export default BigRedLinkButton;
