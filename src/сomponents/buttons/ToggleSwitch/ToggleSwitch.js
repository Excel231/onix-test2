import React from 'react';
import './ToggleSwitch.scss';
import PropType from 'prop-types';

const ToggleSwitch = ({ handleClick }) => {
  return (
    <input onClick={() => handleClick()} className="toggle" type="checkbox" />
  );
};

ToggleSwitch.propTypes = {
  handleClick: PropType.func.isRequired
};

export default ToggleSwitch;
