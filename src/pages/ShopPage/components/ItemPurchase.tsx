import React from 'react';
import { useTranslation } from 'react-i18next';
import BigRedButton from '../../../сomponents/buttons/BigRedButton/BigRedButton';
import '../sass/ItemPurchase.scss';
import { ShopItemType } from '../../../types/Interfaces';

interface Props {
    item: ShopItemType;
    changeShoppingCart: (item: ShopItemType) => void;
}

const ItemPurchase: React.FC<Props> = ({
  item,
  changeShoppingCart
}) => {
  const priceText = item.isOnDiscount
    ? (
      <h2>
        <s className="crossed-text">{item.price}</s>
        <br />
        <span className="discount-price">
          {`${item.discountPrice}$`}
        </span>
      </h2>
    ) : (
      <h2>
        {`${item.price}$`}
      </h2>
    );
  const { t } = useTranslation('', { keyPrefix: 'shopPage' });
  return (
    <div className="price-section">
      {priceText}
      <BigRedButton onClick={() => changeShoppingCart(item)}>{t('addToCartButton')}</BigRedButton>
    </div>
  );
};

export default ItemPurchase;
