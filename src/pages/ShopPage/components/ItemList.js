import React from 'react';
import PropType from 'prop-types';
import ShopItemCard from './ShopItemCard';
import '../sass/ItemList.scss';
import { useShoppingCartChangeContext } from '../../../context/ShoppingCartProvider';

const ItemList = ({ items }) => {
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

ItemList.propTypes = {
  items: PropType.arrayOf(PropType.shape({})).isRequired
};

export default ItemList;
