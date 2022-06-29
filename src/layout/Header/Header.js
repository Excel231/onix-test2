import React from 'react';
import './Header.scss';
import { getThemeColorContext } from '../../context/ThemeColorProvider/ThemeColorProvider';
import HeaderView from './HeaderView';

const Header = () => {
  const darkThemeOn = getThemeColorContext() ?? true;

  return (
    <HeaderView darkThemeOn={darkThemeOn} />
  );
};

export default Header;
