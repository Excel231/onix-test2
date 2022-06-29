import React, { useEffect, useState } from 'react';
import withLayout from '../../HOC/withLayout/withLayout';
import ShopPageView from './ShopPageView';
import { ITEMS_API_LINK } from '../../constants/constants';

const ShopPage = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch(ITEMS_API_LINK)
      .then((res) => res.json())
      .then((data) => {
        setItems(data);
      });
  }, []);

  return (
    <ShopPageView items={items} />
  );
};

export default withLayout(ShopPage);
