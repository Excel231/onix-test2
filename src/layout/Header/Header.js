import React from 'react';
import './styles.scss';
import { Link } from 'react-router-dom';
import icon from '../../images/icon/icon.png';
import NavBar from '../NavBar/NavBar';

function Header() {
  return (
    <header id="header">
      <Link to="/" className="logo">
        <h1 className="logo-text">Knock Out!</h1>
        <img className="logo-img" src={icon} alt="Boxing glove" />
      </Link>
      <NavBar />
    </header>
  );
}

export default Header;
