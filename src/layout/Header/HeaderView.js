import React from 'react';
import PropType from 'prop-types';
import { Link } from 'react-router-dom';
import icon from '../../images/icon/icon.png';
import NavBar from '../NavBar/NavBar';

const HeaderView = ({ darkThemeOn }) => {
  return (
    <header id="header" className={darkThemeOn ? 'dark-theme' : 'light-theme'}>
      <Link to="/" className="logo">
        <h1 className="logo-text">Knock Out!</h1>
        <img className="logo-img" src={icon} alt="Boxing glove" />
      </Link>
      <NavBar />
    </header>
  );
};

HeaderView.propTypes = {
  darkThemeOn: PropType.bool.isRequired
};

export default HeaderView;
