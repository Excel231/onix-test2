import React from 'react';
import './ToggleSwitch.scss';
import PropType from 'prop-types';

const ToggleSwitch = ({ handleClick, toggleStyle }) => {
  return (
    <input onClick={handleClick} className={toggleStyle} type="checkbox" />
  );
};

ToggleSwitch.propTypes = {
  handleClick: PropType.func.isRequired,
  toggleStyle: PropType.string.isRequired
};

export default ToggleSwitch;
