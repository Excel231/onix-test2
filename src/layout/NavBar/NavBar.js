import React, { useState } from 'react';
import './NavBar.scss';
import PropType from 'prop-types';
import { useShoppingCartContext } from '../../context/ShoppingCartProvider';
import NavBarView from './NavBarView';

const NavBar = ({ darkThemeOn }) => {
  const [cartListDisplayed, setCartListDisplayed] = useState(false);

  const shoppingCartItems = useShoppingCartContext() ?? [];

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
