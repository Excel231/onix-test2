import React from 'react';
import { Link } from 'react-router-dom';
import '../Buttons.scss';
import './BigRedLinkButton.scss';

interface Props {
  children: React.ReactNode,
  path: string
}

const BigRedLinkButton: React.FC<Props> = ({ children, path }) => {
  return (
    <Link
      className="big-red-btn link-btn"
      to={path}
    >
      { children }
    </Link>
  );
};

export default BigRedLinkButton;
