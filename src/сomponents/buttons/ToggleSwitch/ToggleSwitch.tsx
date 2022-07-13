import React from 'react';
import './ToggleSwitch.scss';

interface Props {
  handleClick: () => void
  toggleStyle: string
}

const ToggleSwitch: React.FC<Props> = ({ handleClick, toggleStyle }) => {
  return (
    <input onClick={handleClick} className={toggleStyle} type="checkbox" />
  );
};

export default ToggleSwitch;
