import React from 'react';
import PropType from 'prop-types';
import BigRedButton from '../../../сomponents/buttons/BigRedButton/BigRedButton';
import '../sass/ItemPurchase.scss';

const ItemPurchase = ({
  price,
  isOnDiscount,
  discountPrice
}) => {
  const priceText = isOnDiscount
    ? (
      <h2>
        <s className="crossed-text">{discountPrice}</s>
        <br />
        <span className="discount-price">
          {`${discountPrice}$`}
        </span>
      </h2>
    ) : (
      <h2>
        {price}
        $
      </h2>
    );
  console.log(priceText);
  return (
    <div className="price-section">
      {priceText}
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
