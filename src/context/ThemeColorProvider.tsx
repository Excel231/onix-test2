import React, {
  useState, useContext, useCallback, useMemo
} from 'react';
import PropType from 'prop-types';

interface ContextType {
  darkThemeOn: boolean;
  changeTheme: () => void;
}

const ThemeColorContext = React.createContext<ContextType | null>(null);

export const useThemeColorContext = () => useContext(ThemeColorContext)!.darkThemeOn;

export const useThemeColorChangeContext = () => useContext(ThemeColorContext)!.changeTheme;

interface Props {
  children: React.ReactElement
}

const ThemeColorProvider: React.FC<Props> = ({ children }) => {
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
