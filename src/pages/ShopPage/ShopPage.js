import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import withLayout from '../../HOC/withLayout/withLayout';
import ShopPageView from './ShopPageView';
import { ITEMS_API_LINK } from '../../constants/constants';
import endSale from '../../store/sale/saleActions';

const ShopPage = () => {
  const [discountItems, setDiscountItems] = useState([]);
  const [fullPriceItems, setFullPriceItems] = useState([]);
  const saleIsFinished = useSelector(({ saleReducer }) => saleReducer.saleFinished);
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
          setFullPriceItems(items.filter((item) => !item.isOnDiscount));
          setDiscountItems(items.filter((item) => item.isOnDiscount));
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
