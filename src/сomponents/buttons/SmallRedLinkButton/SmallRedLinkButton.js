import React from 'react';
import { Link } from 'react-router-dom';
import PropType from 'prop-types';
import './SmallRedLinkButton.scss';

const SmallRedLinkButton = ({ children, path }) => {
  return (
    <Link className="sml-link-btn" to={path}>
      {children}
    </Link>
  );
};

SmallRedLinkButton.propTypes = {
  children: PropType.node.isRequired,
  path: PropType.node.isRequired
};

export default SmallRedLinkButton;
