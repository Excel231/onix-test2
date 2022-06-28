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

  const hideSideBar = () => {
    setSideBarDisplayed(false);
  };

  return (
    <div className="side-bar-wrapper" onMouseLeave={hideSideBar}>
      <HamburgerButton handleClick={toggleSideBar} />
      <SideBarView
        hideSideBar={hideSideBar}
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
