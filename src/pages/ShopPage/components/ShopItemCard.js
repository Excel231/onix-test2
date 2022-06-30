import React, { useEffect } from 'react';
import Aos from 'aos';
import PropType from 'prop-types';
import ItemImage from './ItemImage';
import ItemDescription from './ItemDescription';
import '../sass/ShopItemCard.scss';
import ItemPurchase from './ItemPurchase';

const ShopItemCard = ({ item, changeShoppingCart }) => {
  const {
    firmName,
    name,
    description,
    weight,
    image
  } = item;

  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <div data-aos="zoom-in" className="card-wrapper">
      <ItemImage image={image} name={name} />
      <ItemDescription firmName={firmName} name={name} description={description} weight={weight} />
      <ItemPurchase
        item={item}
        changeShoppingCart={changeShoppingCart}
      />
    </div>
  );
};

ShopItemCard.propTypes = {
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

export default ShopItemCard;
