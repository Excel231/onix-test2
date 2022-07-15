import React from 'react';
import clsx from 'clsx';
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
      className={clsx({
        'dark-theme': darkThemeOn,
        'light-theme': !darkThemeOn,
        'side-bar-visible': sideBarDisplayed,
        'side-bar-hidden': !sideBarDisplayed
      })}
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
