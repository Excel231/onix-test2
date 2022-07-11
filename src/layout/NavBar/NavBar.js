import React, { useEffect, useState } from 'react';
import PropType from 'prop-types';
import { useShoppingCartContext } from '../../context/ShoppingCartProvider';
import NavBarView from './NavBarView';
import './NavBar.scss';
import store from '../../store/store';

const NavBar = ({ darkThemeOn }) => {
  const [cartListDisplayed, setCartListDisplayed] = useState(false);
  const [loading, setLoading] = useState(false);

  const shoppingCartItems = useShoppingCartContext() ?? [];

  const toggleCartList = () => {
    setCartListDisplayed((prevState) => !prevState);
  };

  const hideCartList = () => {
    setCartListDisplayed(false);
  };

  useEffect(() => {
    return store.subscribe(() => {
      setLoading(store.getState().commentsReducer.loading);
      console.log(store.getState().commentsReducer.loading);
    });
  }, []);

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
