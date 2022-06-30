import React from 'react';
import PropType from 'prop-types';
import ShopItemCard from './ShopItemCard';
import '../sass/ItemList.scss';

const ItemList = ({ items }) => {
  return (
    <div className="cards-deck">
      {items.map((item) => <ShopItemCard key={item.id} item={item} />)}
    </div>
  );
};

ItemList.propTypes = {
  items: PropType.arrayOf(PropType.shape({})).isRequired
};

export default ItemList;
