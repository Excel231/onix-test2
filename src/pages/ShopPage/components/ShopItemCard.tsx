import React, { useEffect } from 'react';
import Aos from 'aos';
import ItemImage from './ItemImage';
import ItemDescription from './ItemDescription';
import '../sass/ShopItemCard.scss';
import ItemPurchase from './ItemPurchase';
import { ShopItemType } from '../../../types/Interfaces';

interface Props {
  item: ShopItemType;
  changeShoppingCart: (item: ShopItemType) => void;
}

const ShopItemCard: React.FC<Props> = ({ item, changeShoppingCart }) => {
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

export default ShopItemCard;
