import React, { useState, useContext, useCallback } from 'react';
import PropType from 'prop-types';

export const ThemeColorContext = React.createContext({});
export const ThemeColorChangeContext = React.createContext({});

export const getThemeColorContext = () => {
  return useContext(ThemeColorContext);
};

export const getThemeColorChangeContext = () => {
  return useContext(ThemeColorChangeContext);
};

const ThemeColorProvider = ({ children }) => {
  const [darkThemeOn, setDarkThemeOn] = useState(true);

  const changeTheme = useCallback(() => {
    setDarkThemeOn((previousTheme) => !previousTheme);
  }, []);

  return (
    <ThemeColorChangeContext.Provider value={changeTheme}>
      <ThemeColorContext.Provider value={darkThemeOn}>
        {children}
      </ThemeColorContext.Provider>
    </ThemeColorChangeContext.Provider>
  );
};

ThemeColorProvider.propTypes = {
  children: PropType.element.isRequired
};

export default ThemeColorProvider;
