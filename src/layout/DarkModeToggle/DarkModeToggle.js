import React from 'react';
import ToggleSwitch from '../../сomponents/buttons/ToggleSwitch/ToggleSwitch';
import { getThemeColorChangeContext, getThemeColorContext } from '../ThemeColorProvider/ThemeColorProvider';

const DarkModeToggle = () => {
  const changeTheme = getThemeColorChangeContext();
  const toggleStyle = getThemeColorContext() ?? true ? 'toggle-off' : 'toggle-on';

  return (
    <ToggleSwitch handleClick={changeTheme} toggleStyle={toggleStyle} />
  );
};

export default DarkModeToggle;
