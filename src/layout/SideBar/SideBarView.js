import React from 'react';
import PropType from 'prop-types';
import './SideBar.scss';
import pagesToDisplayList from '../../helper/pagesToDisplayList';
import SmallRedLinkButton from '../../сomponents/buttons/SmallRedLinkButton/SmallRedLinkButton';

const SideBarView = ({
  darkThemeOn,
  sideBarDisplayed
}) => {
  return (
    <ul className={
      `side-bar ${darkThemeOn ? 'dark-theme' : 'light-theme'} 
    ${sideBarDisplayed ? 'side-bar' : 'side-bar-hidden'}`
    }
    >
      <div className="side-bar-link">
        {pagesToDisplayList.map(({
          name,
          path
        }) => {
          return (
            <li key={path}>
              <SmallRedLinkButton path={path}>{name}</SmallRedLinkButton>
            </li>
          );
        })}
      </div>
    </ul>
  );
};

SideBarView.propTypes = {
  darkThemeOn: PropType.bool.isRequired,
  sideBarDisplayed: PropType.bool.isRequired
};

export default SideBarView;
