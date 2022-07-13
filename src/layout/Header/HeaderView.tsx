import React from 'react';
import { Link } from 'react-router-dom';
import icon from '../../images/icon/icon.png';
import NavBar from '../NavBar/NavBar';
import SideBar from '../SideBar/SideBar';
import './Header.scss';

interface Props {
    darkThemeOn: boolean;
}

const HeaderView: React.FC<Props> = ({ darkThemeOn }) => {
  return (
    <header id="header" className={darkThemeOn ? 'dark-theme' : 'light-theme'}>
      <div className="logo">
        <SideBar darkThemeOn={darkThemeOn} />
        <Link to="/" className="homepage-link">
          <h1 className="logo-text">Knock Out!</h1>
          <img className="logo-img" src={icon} alt="Boxing glove" />
        </Link>
      </div>
      <NavBar darkThemeOn={darkThemeOn} />
    </header>
  );
};

export default HeaderView;
