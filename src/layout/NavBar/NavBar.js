import React, { useState } from 'react';
import PropType from 'prop-types';
import { useSelector } from 'react-redux';
import { useShoppingCartContext } from '../../context/ShoppingCartProvider';
import NavBarView from './NavBarView';
import './NavBar.scss';

const NavBar = ({ darkThemeOn }) => {
  const [cartListDisplayed, setCartListDisplayed] = useState(false);
  const loading = useSelector(({ commentsReducer }) => commentsReducer.loading);

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
      displayLoader={loading}
    />
  );
};

NavBar.propTypes = {
  darkThemeOn: PropType.bool.isRequired
};

export default NavBar;
