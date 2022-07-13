import React from 'react';
import './BoxerParameterButton.scss';

interface Props {
    children: React.ReactNode;
    handleClick: () => void;
}

const BoxerParameterButton: React.FC<Props> = ({
  children,
  handleClick
}) => {
  return (
    <button
      className="boxer-parameter-btn"
      type="button"
      onClick={handleClick}
    >
      {children}
    </button>
  );
};

export default BoxerParameterButton;
