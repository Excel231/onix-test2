import React from 'react';
import DarkModeToggle from '../DarkModeToggle/DarkModeToggle';
import './NavBar.scss';
import CartButton from './components/CartButton';
import LanguageChangePanel from './components/LanguageChangePanel';
import CartItemsList from './components/CartItemsList';
import Loader from '../../сomponents/Loader/Loader';
import { Product } from '../../types/Interfaces';

interface Props {
    darkThemeOn: boolean;
    cartListDisplayed: boolean;
    shoppingCartItems: Product[];
    toggleCartList: () => void;
    hideCartList: () => void;
    displayLoader: boolean
}

const NavBarView: React.FC<Props> = ({
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
      <div className="cart-wrapper">
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

export default NavBarView;
