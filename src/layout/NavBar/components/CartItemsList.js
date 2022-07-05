import React from 'react';
import PropType from 'prop-types';
import '../sass/CartListItem.scss';

const CartItemsList = ({ darkThemeOn, cartListDisplayed, shoppingCartItems }) => {
  return (
    <ul
      className={
        `cart-list 
        ${darkThemeOn ? 'dark-theme' : 'light-theme'}
        ${cartListDisplayed && shoppingCartItems.length !== 0 ? 'cart-list' : 'cart-list-hidden'}`
      }
    >
      {shoppingCartItems.map((item) => {
        return (
          <li className="cart-list-item" key={item.id}>
            {`${item.firmName} - ${item.name}: ${item.isOnDiscount ? item.discountPrice : item.price}$`}
          </li>
        );
      })}
    </ul>
  );
};

CartItemsList.propTypes = {
  darkThemeOn: PropType.bool.isRequired,
  cartListDisplayed: PropType.bool.isRequired,
  shoppingCartItems: PropType.arrayOf(PropType.shape({})).isRequired
};

export default CartItemsList;
