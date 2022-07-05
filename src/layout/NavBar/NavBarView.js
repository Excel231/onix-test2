import React from 'react';
import PropType from 'prop-types';
import DarkModeToggle from '../DarkModeToggle/DarkModeToggle';
import './NavBar.scss';
import CartButton from './components/CartButton';
import LanguageChangePanel from './components/LanguageChangePanel';
import CartItemsList from './components/CartItemsList';

const NavBarView = ({
  darkThemeOn,
  cartListDisplayed,
  shoppingCartItems,
  toggleCartList,
  hideCartList
}) => {
  return (
    <nav className="nav-bar" onMouseLeave={() => hideCartList()}>
      <LanguageChangePanel />
      <CartButton toggleCartList={toggleCartList} />
      <CartItemsList
        darkThemeOn={darkThemeOn}
        cartListDisplayed={cartListDisplayed}
        shoppingCartItems={shoppingCartItems}
      />
      <DarkModeToggle />
    </nav>
  );
};

NavBarView.propTypes = {
  darkThemeOn: PropType.bool.isRequired,
  cartListDisplayed: PropType.bool.isRequired,
  shoppingCartItems: PropType.arrayOf(PropType.shape({})).isRequired,
  toggleCartList: PropType.func.isRequired,
  hideCartList: PropType.func.isRequired
};

export default NavBarView;
