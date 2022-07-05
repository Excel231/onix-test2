import React from 'react';
import PropType from 'prop-types';
import './ShopPage.scss';
import { useTranslation } from 'react-i18next';
import DiscountTimer from '../../сomponents/DiscountTimer/DiscountTimer';
import ItemList from './components/ItemList';

const ShopPageView = ({
  normalPriceItems,
  discountItems
}) => {
  const { t } = useTranslation();
  return (
    <>
      <div className="discount-section">
        <h1>{t('dayOffer')}</h1>
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
