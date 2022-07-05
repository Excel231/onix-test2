import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import PropType from 'prop-types';
import '../sass/CartButton.scss';

const CartButton = ({ toggleCartList }) => {
  return (
    <button className="cart-btn" type="button" onClick={() => toggleCartList()}>
      <FontAwesomeIcon icon={faShoppingCart} className="fa-2xl" />
    </button>
  );
};

CartButton.propTypes = {
  toggleCartList: PropType.func.isRequired
};

export default CartButton;
