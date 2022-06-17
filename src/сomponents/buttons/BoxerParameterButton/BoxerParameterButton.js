import React from 'react';
import PropType from 'prop-types';
import './styles.css';

function BoxerParameterButton({ children, handleClick }) {
  return (
    <button
      className="boxer-parameter-btn"
      type="button"
      onClick={handleClick}
    >
      {children}
    </button>
  );
}

BoxerParameterButton.propTypes = {
  children: PropType.string.isRequired,
  handleClick: PropType.func.isRequired
};

export default BoxerParameterButton;
