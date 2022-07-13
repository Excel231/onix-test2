import React from 'react';
import './Header.scss';
import { useThemeColorContext } from '../../context/ThemeColorProvider';
import HeaderView from './HeaderView';

const Header = () => {
  const darkThemeOn = useThemeColorContext() ?? true;

  return (
    <HeaderView darkThemeOn={darkThemeOn} />
  );
};

export default Header;
