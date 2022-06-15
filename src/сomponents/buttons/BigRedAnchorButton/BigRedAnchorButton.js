import React from 'react';
import PropType from 'prop-types';
import '../styles.css';

function BigRedAnchorButton({ children, changeText }) {
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
}

BigRedAnchorButton.propTypes = {
  changText: PropType.func
};

export default BigRedAnchorButton;
