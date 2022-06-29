import React from 'react';
import PropType from 'prop-types';
import ShopItemCard from './components/ShopItemCard';
import './ShopPage.scss';

const ShopPageView = ({ items }) => {
  return (
    <div className="cards-deck">
      {items.map((item) => {
        return (
          <ShopItemCard key={item.id} item={item} />
        );
      })}
    </div>
  );
};

ShopPageView.propTypes = {
  items: PropType.arrayOf(PropType.shape({})).isRequired
};

export default ShopPageView;
