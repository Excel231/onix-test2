import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useShoppingCartContext } from '../../context/ShoppingCartProvider';
import NavBarView from './NavBarView';
import './NavBar.scss';

interface Props {
  darkThemeOn: boolean;
}

interface CommentsReducerType {
  commentsReducer: {
    loading: boolean;
  }
}

const NavBar: React.FC<Props> = ({ darkThemeOn }) => {
  const [cartListDisplayed, setCartListDisplayed] = useState(false);
  const loading = useSelector(({ commentsReducer }: CommentsReducerType) => commentsReducer.loading);

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

export default NavBar;
