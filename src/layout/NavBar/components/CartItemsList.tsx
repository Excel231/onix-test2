import React from 'react';
import '../sass/CartListItem.scss';
import { Product } from '../../../types/Interfaces';

type Props = {
    darkThemeOn: boolean;
    cartListDisplayed: boolean;
    shoppingCartItems: Product [];
}

const CartItemsList: React.FC<Props> = ({
  darkThemeOn,
  cartListDisplayed,
  shoppingCartItems
}) => {
  return (
    <ul
      className={
                `cart-list ${
                  darkThemeOn ? 'dark-theme' : 'light-theme'
                } ${
                  cartListDisplayed && shoppingCartItems.length !== 0 ? 'cart-list' : 'cart-list-hidden'
                }`
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

export default CartItemsList;
