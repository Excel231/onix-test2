import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import withLayout from '../../HOC/withLayout/withLayout';
import ShopPageView from './ShopPageView';
import { ITEMS_API_LINK } from '../../constants/constants';
import endSale from '../../store/sale/saleActions';
import { SaleSelectorType, ShopItemType } from '../../types/Interfaces';

const ShopPage = () => {
  const [discountItems, setDiscountItems] = useState<ShopItemType[]>([]);
  const [fullPriceItems, setFullPriceItems] = useState<ShopItemType[]>([]);
  const saleIsFinished = useSelector(({ saleReducer }: SaleSelectorType) => saleReducer.saleFinished);
  const dispatch = useDispatch();

  const finishSale = () => {
    dispatch(endSale());
    setFullPriceItems((prevState) => [...prevState, ...discountItems]);
    setDiscountItems([]);
  };

  useEffect(() => {
    axios.get(ITEMS_API_LINK)
      .then((res) => {
        const items = res.data;
        if (saleIsFinished) {
          setFullPriceItems(items);
        } else {
          setFullPriceItems(items.filter((item: ShopItemType) => !item.isOnDiscount));
          setDiscountItems(items.filter((item: ShopItemType) => item.isOnDiscount));
        }
      });
  }, []);

  return (
    <ShopPageView
      normalPriceItems={fullPriceItems}
      discountItems={discountItems}
      finishSale={finishSale}
    />
  );
};

export default withLayout(ShopPage);
