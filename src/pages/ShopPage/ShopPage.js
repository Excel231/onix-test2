import React, { useEffect, useState } from 'react';
import axios from 'axios';
import withLayout from '../../HOC/withLayout';
import ShopPageView from './ShopPageView';
import { ITEMS_API_LINK } from '../../constants/constants';

const ShopPage = () => {
  const [items, setItems] = useState([]);

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
    />
  );
};

export default withLayout(ShopPage);
