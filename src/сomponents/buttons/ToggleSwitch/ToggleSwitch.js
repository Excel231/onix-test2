import React from 'react';
import './ToggleSwitch.scss';

const ToggleSwitch = () => {
  return (
    <div className="toggle-switch">
      <input type="checkbox" />
      <span className="slider" />
    </div>
  );
};

export default ToggleSwitch;
