import React from 'react';
import '../Buttons.scss';

interface Props {
    children: React.ReactNode;
    changeText: () => void;
}

const BigRedAnchorButton: React.FC<Props> = ({ children, changeText }) => {
  return (
    <a
      className="big-red-btn"
      href="https://github.com/Excel231/onix-test2"
      onClick={changeText}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  );
};

export default BigRedAnchorButton;
