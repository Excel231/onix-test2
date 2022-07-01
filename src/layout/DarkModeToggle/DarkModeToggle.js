import React from 'react';
import ToggleSwitch from '../../сomponents/buttons/ToggleSwitch/ToggleSwitch';
import { useThemeColorChangeContext, useThemeColorContext } from '../../context/ThemeColorProvider';

const DarkModeToggle = () => {
  const changeTheme = useThemeColorChangeContext();
  const toggleStyle = useThemeColorContext() ?? true ? 'toggle-off' : 'toggle-on';

  return (
    <ToggleSwitch handleClick={changeTheme} toggleStyle={toggleStyle} />
  );
};

export default DarkModeToggle;
