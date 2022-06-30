import React, { useState } from 'react';
import './NavBar.scss';
import PropType from 'prop-types';
import { getShoppingCartContext } from '../../context/ShoppingCartProvider/ShoppingCartProvider';
import NavBarView from './NavBarView';

const NavBar = ({ darkThemeOn }) => {
  const [cartListDisplayed, setCartListDisplayed] = useState(false);

  const shoppingCartItems = getShoppingCartContext() ?? [];

  const toggleCartList = () => {
    setCartListDisplayed((prevState) => !prevState);
  };

  const hideCartList = () => {
    setCartListDisplayed(false);
  };

  return (
    <NavBarView
      darkThemeOn={darkThemeOn}
      cartListDisplayed={cartListDisplayed}
      shoppingCartItems={shoppingCartItems}
      toggleCartList={toggleCartList}
      hideCartList={hideCartList}
    />
  );
};

NavBar.propTypes = {
  darkThemeOn: PropType.bool.isRequired
};

export default NavBar;
