import React, { useEffect, useState } from 'react';
import PropType from 'prop-types';
import DiscountTimerView from './DiscountTimerView';
import { CURRENT_TIME, DISCOUNT_END_TIME } from '../../constants/constants';

const DiscountTimer = ({ finishSale }) => {
  const [fullDate, setFullDate] = useState(CURRENT_TIME);
  const [saleIsFinished, setSaleIsFinished] = useState(DISCOUNT_END_TIME < new Date());

  const onSecondPass = () => {
    setFullDate(new Date());
  };

  useEffect(() => {
    if (DISCOUNT_END_TIME <= new Date() && !saleIsFinished) {
      setSaleIsFinished(true);
      finishSale();
    }
  });

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

DiscountTimer.propTypes = {
  finishSale: PropType.func.isRequired
};

export default DiscountTimer;
