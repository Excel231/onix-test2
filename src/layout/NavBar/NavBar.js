import React from 'react';
import { Link } from 'react-scroll';
import './styles.scss';
import DarkModeToggle from '../DarkModeToggle/DarkModeToggle';

const NavBar = () => {
  return (
    <nav className="nav-bar">
      <Link className="nav-link" to="homepage-main-section" spy smooth offset={-150} duration={500}>
        About
      </Link>
      <Link className="nav-link" to="comment-section" spy smooth offset={-50} duration={500}>
        Comments
      </Link>
      <Link className="nav-link" to="footer-section" spy smooth duration={500}>
        Contacts
      </Link>
      <DarkModeToggle />
    </nav>
  );
};

export default NavBar;
