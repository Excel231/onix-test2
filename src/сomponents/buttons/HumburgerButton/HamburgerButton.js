import React from 'react';
import PropType from 'prop-types';
import '../Buttons.scss';
import './HamburgerButton.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const HamburgerButton = ({ handleClick }) => {
  return (
    <button className="hamburger-btn" type="button" onClick={handleClick}>
      <FontAwesomeIcon icon={faBars} className="fa-3x" />
    </button>
  );
};

HamburgerButton.propTypes = {
  handleClick: PropType.func.isRequired
};

export default HamburgerButton;
