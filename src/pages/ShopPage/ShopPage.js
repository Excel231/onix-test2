import React, { useEffect, useState } from 'react';
import axios from 'axios';
import withLayout from '../../HOC/withLayout';
import ShopPageView from './ShopPageView';
import { ITEMS_API_LINK } from '../../constants/constants';

const ShopPage = () => {
  const [items, setItems] = useState([]);

  const finishSale = () => {
    setItems((prevState) => {
      return prevState.map((item) => {
        return { ...item, isOnDiscount: false };
      });
    });
  };

  useEffect(() => {
    const api = axios.create({
      baseURL: ITEMS_API_LINK
    });
    api.get('/').then((res) => {
      setItems(res.data);
    });
  }, []);

  return (
    <ShopPageView
      normalPriceItems={items.filter((item) => !item.isOnDiscount)}
      discountItems={items.filter((item) => item.isOnDiscount)}
      setItems={setItems}
      finishSale={finishSale}
    />
  );
};

export default withLayout(ShopPage);
