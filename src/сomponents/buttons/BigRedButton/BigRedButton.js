import React from 'react';
import PropType from 'prop-types';
import '../Buttons.scss';

const BigRedButton = ({ children, onClick }) => {
  return (
    <button
      type="button"
      className="big-red-btn"
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
