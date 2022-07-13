import React from 'react';
import '../Buttons.scss';
import './HamburgerButton.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

interface Props {
    handleClick: () => void;
}

const HamburgerButton: React.FC<Props> = ({ handleClick }) => {
  return (
    <button className="hamburger-btn" type="button" onClick={handleClick}>
      <FontAwesomeIcon icon={faBars} className="fa-3x" />
    </button>
  );
};

export default HamburgerButton;
