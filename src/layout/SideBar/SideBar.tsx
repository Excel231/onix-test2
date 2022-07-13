import React, { useState } from 'react';
import SideBarView from './SideBarView';
import './SideBar.scss';
import HamburgerButton from '../../сomponents/buttons/HumburgerButton/HamburgerButton';

interface Props {
    darkThemeOn: boolean;
}

const SideBar: React.FC<Props> = ({ darkThemeOn }) => {
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
        darkThemeOn={darkThemeOn}
        sideBarDisplayed={sideBarDisplayed}
      />
    </div>
  );
};

export default SideBar;
