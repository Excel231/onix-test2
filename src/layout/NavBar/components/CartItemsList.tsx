import React from 'react';
import '../sass/CartListItem.scss';
import clsx from 'clsx';
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
      className={clsx('cart-list', {
        'dark-theme': darkThemeOn,
        'light-theme': !darkThemeOn,
        'cart-list-hidden': !(cartListDisplayed && shoppingCartItems.length)
      })}
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
