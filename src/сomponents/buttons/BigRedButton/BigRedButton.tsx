import React from 'react';
import PropType from 'prop-types';
import '../Buttons.scss';

interface Props {
  children: React.ReactNode;
  onClick: () => void;
}

const BigRedButton: React.FC<Props> = ({ children, onClick }) => {
  return (
    <button
      type="button"
      className="big-red-btn btn"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

BigRedButton.propTypes = {
  children: PropType.node.isRequired,
  onClick: PropType.func.isRequired
};

export default BigRedButton;
