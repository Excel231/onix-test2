import React, { useEffect, useState } from 'react';
import DiscountTimerView from './DiscountTimerView';
import { CURRENT_TIME, DISCOUNT_END_TIME } from '../../constants/constants';

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
