import React from 'react';
import PropType from 'prop-types';
import './ShopPage.scss';
import DiscountTimer from '../../сomponents/DiscountTimer/DiscountTimer';
import ItemList from './components/ItemList';

const ShopPageView = ({
  normalPriceItems,
  discountItems
}) => {
  return (
    <>
      <div className="discount-section">
        <h1>Offer Of The Day!</h1>
        <DiscountTimer />
        <ItemList items={discountItems} />
      </div>
      <ItemList items={normalPriceItems} />
    </>
  );
};

ShopPageView.propTypes = {
  normalPriceItems: PropType.arrayOf(PropType.shape({})).isRequired,
  discountItems: PropType.arrayOf(PropType.shape({})).isRequired
};

export default ShopPageView;
