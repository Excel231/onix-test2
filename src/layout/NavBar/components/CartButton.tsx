import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import '../sass/CartButton.scss';

interface Props {
    toggleCartList: () => void;
}

const CartButton: React.FC<Props> = ({ toggleCartList }) => {
  return (
    <div className="cart-btn-wrapper">
      <button className="cart-btn" type="button" onClick={() => toggleCartList()}>
        <FontAwesomeIcon icon={faShoppingCart} className="fa-2xl" />
      </button> 
    </div>
  );
};

export default CartButton;
