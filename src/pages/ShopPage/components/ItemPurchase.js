import React from 'react';
import PropType from 'prop-types';
import BigRedButton from '../../../сomponents/buttons/BigRedButton/BigRedButton';
import '../sass/ItemPurchase.scss';

const ItemPurchase = ({
  item,
  changeShoppingCart
}) => {
  const priceText = item.isOnDiscount
    ? (
      <h2>
        <s className="crossed-text">{item.price}</s>
        <br />
        <span className="discount-price">
          {`${item.discountPrice}$`}
        </span>
      </h2>
    ) : (
      <h2>
        {item.price}
        $
      </h2>
    );
  return (
    <div className="price-section">
      {priceText}
      <BigRedButton onClick={() => changeShoppingCart(item, true)}>Add to cart!</BigRedButton>
    </div>
  );
};

ItemPurchase.propTypes = {
  item: PropType.shape({
    id: PropType.node.isRequired,
    firmName: PropType.node.isRequired,
    name: PropType.node.isRequired,
    description: PropType.node.isRequired,
    price: PropType.node.isRequired,
    weight: PropType.node.isRequired,
    isOnDiscount: PropType.bool.isRequired,
    discountPrice: PropType.node.isRequired,
    image: PropType.node.isRequired
  }).isRequired,
  changeShoppingCart: PropType.func.isRequired
};

export default ItemPurchase;
