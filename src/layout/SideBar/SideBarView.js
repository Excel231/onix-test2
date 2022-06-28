import React from 'react';
import PropType from 'prop-types';
import { Link } from 'react-router-dom';
import pagesToDisplayList from '../../helper/pagesToDisplayList';
import './SideBar.scss';

const SideBarView = ({
  darkThemeOn,
  sideBarDisplayed
}) => {
  return (
    <ul
      className={
        `${darkThemeOn ? 'dark-theme' : 'light-theme'} 
         ${sideBarDisplayed ? 'side-bar-visible' : 'side-bar-hidden'}`
      }
    >
      {pagesToDisplayList.map(({
        name,
        path
      }) => {
        return (
          <Link key={path} to={path} className="page-link">
            <li>
              <h3>{name}</h3>
            </li>
          </Link>
        );
      })}
    </ul>
  );
};

SideBarView.propTypes = {
  darkThemeOn: PropType.bool.isRequired,
  sideBarDisplayed: PropType.bool.isRequired
};

export default SideBarView;
