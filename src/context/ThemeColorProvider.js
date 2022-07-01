import React, {
  useState, useContext, useCallback, useMemo
} from 'react';
import PropType from 'prop-types';

const ThemeColorContext = React.createContext({});

export const useThemeColorContext = () => useContext(ThemeColorContext).darkThemeOn;

export const useThemeColorChangeContext = () => useContext(ThemeColorContext).changeTheme;

const ThemeColorProvider = ({ children }) => {
  const [darkThemeOn, setDarkThemeOn] = useState(true);

  const changeTheme = useCallback(() => {
    setDarkThemeOn((previousTheme) => !previousTheme);
  }, []);

  const themeColorContextValue = useMemo(() => (
    { darkThemeOn, changeTheme }
  ), [changeTheme, darkThemeOn]);

  return (
    <ThemeColorContext.Provider value={themeColorContextValue}>
      {children}
    </ThemeColorContext.Provider>
  );
};

ThemeColorProvider.propTypes = {
  children: PropType.element.isRequired
};

export default ThemeColorProvider;
