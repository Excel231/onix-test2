import React from 'react';
import './ShopPage.scss';
import { useTranslation } from 'react-i18next';
import DiscountTimer from '../../сomponents/DiscountTimer/DiscountTimer';
import ItemList from './components/ItemList';
import { ShopItemType } from '../../types/Interfaces';

interface Props {
  normalPriceItems: ShopItemType[];
  discountItems: ShopItemType[];
  finishSale: () => void;
}

const ShopPageView: React.FC<Props> = ({
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

export default ShopPageView;
