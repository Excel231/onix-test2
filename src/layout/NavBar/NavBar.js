import React from 'react';
import { Link } from 'react-scroll';
import './styles.scss';

function NavBar() {
  return (
    <nav className="nav-bar">
      <Link className="nav-link" to="homepage-main-section" spy smooth offset={-150} duration={500}>
        About
      </Link>
      <Link className="nav-link" to="comment-section" spy smooth offset={-50} duration={500}>
        Comments
      </Link>
    </nav>
  );
}

export default NavBar;
