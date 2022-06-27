import React from 'react';
import PropType from 'prop-types';
import '../Buttons.scss';
import './HamburgerButton.scss';

const HamburgerButton = ({ handleClick }) => {
  return (
    <button className="hamburger-btn" type="button" onClick={handleClick}>
      <div />
      <div />
      <div />
    </button>
  );
};

HamburgerButton.propTypes = {
  handleClick: PropType.func.isRequired
};

export default HamburgerButton;
