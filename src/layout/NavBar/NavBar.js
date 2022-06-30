import React from 'react';
import './NavBar.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import DarkModeToggle from '../DarkModeToggle/DarkModeToggle';
import { getShoppingCartContext } from '../../context/ShoppingCartProvider/ShoppingCartProvider';

const NavBar = () => {
  const shoppingCartItems = getShoppingCartContext() ?? [];
  return (
    <nav className="nav-bar">
      <button type="button" onClick={() => console.log(shoppingCartItems)}>
        <FontAwesomeIcon icon={faShoppingCart} className="fa-2xl" />
      </button>
      <DarkModeToggle />
    </nav>
  );
};

export default NavBar;
