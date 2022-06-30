import React from 'react';
import PropType from 'prop-types';
import ShopItemCard from './ShopItemCard';
import '../sass/ItemList.scss';
import { getShoppingCartChangeContext } from '../../../context/ShoppingCartProvider/ShoppingCartProvider';

const ItemList = ({ items }) => {
  const changeShoppingCart = getShoppingCartChangeContext();
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
