import React from 'react';
import { Link } from 'react-router-dom';
import pagesToDisplayList from '../../helper/pagesToDisplayList';
import './SideBar.scss';

interface Props {
    darkThemeOn: boolean;
    sideBarDisplayed: boolean;
}

const SideBarView: React.FC<Props> = ({
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

export default SideBarView;
