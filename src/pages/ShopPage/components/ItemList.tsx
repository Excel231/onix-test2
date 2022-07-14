import React from 'react';
import ShopItemCard from './ShopItemCard';
import '../sass/ItemList.scss';
import { useShoppingCartChangeContext } from '../../../context/ShoppingCartProvider';
import { ShopItemType } from '../../../types/Interfaces';

interface Props {
  items: ShopItemType[];
}

const ItemList: React.FC<Props> = ({ items }) => {
  const changeShoppingCart = useShoppingCartChangeContext();
  return (
    <div className="cards-deck">
      {items.map((item) => {
        return (
          <ShopItemCard
            key={item.id}
            item={item}
            changeShoppingCart={changeShoppingCart}
          />
        );
      })}
    </div>
  );
};

export default ItemList;
