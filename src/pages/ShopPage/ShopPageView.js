import React from 'react';
import PropType from 'prop-types';
import './ShopPage.scss';
import { useTranslation } from 'react-i18next';
import DiscountTimer from '../../сomponents/DiscountTimer/DiscountTimer';
import ItemList from './components/ItemList';

const ShopPageView = ({
  normalPriceItems,
  discountItems,
  finishSale
}) => {
  const { t } = useTranslation('', { keyPrefix: 'shopPage' });
  return (
    <>
      <div className="discount-section">
        <h1>{t('dayOffer')}</h1>
        <DiscountTimer finishSale={finishSale} />
        <ItemList items={discountItems} />
      </div>
      <ItemList items={normalPriceItems} />
    </>
  );
};

ShopPageView.propTypes = {
  normalPriceItems: PropType.arrayOf(PropType.shape({})).isRequired,
  discountItems: PropType.arrayOf(PropType.shape({})).isRequired,
  finishSale: PropType.func.isRequired
};

export default ShopPageView;
