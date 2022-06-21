import React from 'react';
import PropType from 'prop-types';
import '../styles.scss';

function BigRedButton({ children, onClick }) {
  return (
    <button
      type="button"
      className="big-red-btn"
      onClick={onClick}
    >
      {children}
    </button>
  );
}

BigRedButton.propTypes = {
  children: PropType.node.isRequired,
  onClick: PropType.func.isRequired
};

export default BigRedButton;
