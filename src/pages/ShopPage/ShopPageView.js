import React from 'react';
import PropType from 'prop-types';
import ShopItemCard from './components/ShopItemCard';
import './ShopPage.scss';

const ShopPageView = ({
  normalPriceItems,
  discountItems
}) => {
  return (
    <>
      <div className="cards-deck">
        {discountItems.map((item) => {
          return (
            <ShopItemCard key={item.id} item={item} />
          );
        })}
      </div>
      <div className="cards-deck">
        {normalPriceItems.map((item) => {
          return (
            <ShopItemCard key={item.id} item={item} />
          );
        })}
      </div>
    </>
  );
};

ShopPageView.propTypes = {
  normalPriceItems: PropType.arrayOf(PropType.shape({})).isRequired,
  discountItems: PropType.arrayOf(PropType.shape({})).isRequired
};

export default ShopPageView;
