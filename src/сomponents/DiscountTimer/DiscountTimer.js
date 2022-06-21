import React, { useEffect, useState } from 'react';
import DiscountTimerView from './DiscountTimerView';

const CURRENT_TIME = new Date();

const DISCOUNT_END_TIME = new Date(
  CURRENT_TIME.getFullYear(),
  CURRENT_TIME.getMonth(),
  CURRENT_TIME.getDate() + 2,
  CURRENT_TIME.getHours(),
  CURRENT_TIME.getMinutes(),
  CURRENT_TIME.getSeconds()
);

const DiscountTimer = () => {
  const [fullDate, setFullDate] = useState(CURRENT_TIME);

  const onSecondPass = () => {
    setFullDate(new Date());
  };

  useEffect(() => {
    const discountTimer = setInterval(() => onSecondPass(), 1000);
    return () => clearInterval(discountTimer);
  }, []);

  return (
    <DiscountTimerView
      discountEndTime={DISCOUNT_END_TIME}
      currentTime={fullDate}
    />
  );
};

export default DiscountTimer;
