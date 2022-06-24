import React from 'react';
import { Link } from 'react-scroll';
import './NavBar.scss';
import DarkModeToggle from '../DarkModeToggle/DarkModeToggle';

const NavBar = () => {
  return (
    <nav className="nav-bar">
      <Link
        activeClass="active-link"
        className="nav-link"
        to="homepage-main-section"
        spy
        smooth
        offset={-150}
        duration={400}
      >
        About
      </Link>
      <Link
        activeClass="active-link"
        className="nav-link"
        to="comment-section"
        spy
        smooth
        offset={-50}
        duration={400}
      >
        Comments
      </Link>
      <DarkModeToggle />
    </nav>
  );
};

export default NavBar;
