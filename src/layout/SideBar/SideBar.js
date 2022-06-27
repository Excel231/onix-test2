import React, { useState } from 'react';
import PropType from 'prop-types';
import SideBarView from './SideBarView';
import './SideBar.scss';
import HamburgerButton from '../../сomponents/buttons/HumburgerButton/HamburgerButton';

const SideBar = ({ darkThemeOn }) => {
  const [sideBarDisplayed, setSideBarDisplayed] = useState(false);

  const toggleSideBar = () => {
    setSideBarDisplayed((prevState) => !prevState);
  };

  return (
    <div className="side-bar-wrapper">
      <HamburgerButton handleClick={toggleSideBar} />
      <SideBarView
        darkThemeOn={darkThemeOn}
        sideBarDisplayed={sideBarDisplayed}
        toggleSideBar={toggleSideBar}
      />
    </div>
  );
};

SideBar.propTypes = {
  darkThemeOn: PropType.bool.isRequired
};

export default SideBar;
