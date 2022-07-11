import React from 'react';
import PropType from 'prop-types';
import DarkModeToggle from '../DarkModeToggle/DarkModeToggle';
import './NavBar.scss';
import CartButton from './components/CartButton';
import LanguageChangePanel from './components/LanguageChangePanel';
import CartItemsList from './components/CartItemsList';
import Loader from '../../сomponents/Loader/Loader';

const NavBarView = ({
  darkThemeOn,
  cartListDisplayed,
  shoppingCartItems,
  toggleCartList,
  hideCartList,
  displayLoader
}) => {
  return (
    <nav className="nav-bar" onMouseLeave={() => hideCartList()}>
      <Loader displayLoader={displayLoader} />
      <LanguageChangePanel />
      <div>
        <CartButton toggleCartList={toggleCartList} />
        <CartItemsList
          darkThemeOn={darkThemeOn}
          cartListDisplayed={cartListDisplayed}
          shoppingCartItems={shoppingCartItems}
        />
      </div>
      <DarkModeToggle />
    </nav>
  );
};

NavBarView.propTypes = {
  darkThemeOn: PropType.bool.isRequired,
  cartListDisplayed: PropType.bool.isRequired,
  shoppingCartItems: PropType.arrayOf(PropType.shape({})).isRequired,
  toggleCartList: PropType.func.isRequired,
  hideCartList: PropType.func.isRequired,
  displayLoader: PropType.bool.isRequired
};

export default NavBarView;
