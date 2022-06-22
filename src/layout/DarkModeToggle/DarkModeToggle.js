import React from 'react';
import ToggleSwitch from '../../сomponents/buttons/ToggleSwitch/ToggleSwitch';
import { getThemeColorChangeContext } from '../../сomponents/ThemeColorProvider/ThemeColorProvider';

const DarkModeToggle = () => {
  const changeTheme = getThemeColorChangeContext();

  return (
    <ToggleSwitch handleClick={changeTheme} />
  );
};

export default DarkModeToggle;
