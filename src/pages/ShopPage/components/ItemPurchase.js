import React from 'react';
import PropType from 'prop-types';
import BigRedButton from '../../../сomponents/buttons/BigRedButton/BigRedButton';
import '../sass/ItemPurchase.scss';

const ItemPurchase = ({ price, isOnDiscount, discountPrice }) => {
  return (
    <div className="price-section">
      <h2>
        {isOnDiscount ? discountPrice : price}
        $
      </h2>
      {/* eslint-disable-next-line no-console */}
      <BigRedButton onClick={() => console.log('Item added to cart!')}>Add to cart!</BigRedButton>
    </div>
  );
};

ItemPurchase.propTypes = {
  price: PropType.node.isRequired,
  isOnDiscount: PropType.bool.isRequired,
  discountPrice: PropType.node.isRequired
};

export default ItemPurchase;
