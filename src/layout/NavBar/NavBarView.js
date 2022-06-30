import React from 'react';
import PropType from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import DarkModeToggle from '../DarkModeToggle/DarkModeToggle';

import './NavBar.scss';

const NavBarView = ({
  darkThemeOn, cartListDisplayed, shoppingCartItems, toggleCartList, hideCartList
}) => {
  return (
    <nav className="nav-bar">
      <button className="cart-btn" type="button" onClick={() => toggleCartList()}>
        <FontAwesomeIcon icon={faShoppingCart} className="fa-2xl" />
      </button>
      <ul
        className={
        `cart-list 
        ${darkThemeOn ? 'dark-theme' : 'light-theme'}
        ${cartListDisplayed ? 'cart-list' : 'cart-list-hidden'}`
      }
        onMouseLeave={() => hideCartList()}
      >
        {shoppingCartItems.map((item) => {
          return (
            <li className="cart-list-item" key={item.id}>
              {`${item.firmName} - ${item.name}: ${item.isOnDiscount ? item.discountPrice : item.price}$`}
            </li>
          );
        })}
      </ul>
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
