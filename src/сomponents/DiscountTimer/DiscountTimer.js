import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import PropType from 'prop-types';
import DiscountTimerView from './DiscountTimerView';
import { CURRENT_TIME, DISCOUNT_END_TIME } from '../../constants/constants';

const DiscountTimer = ({ finishSale }) => {
  const [fullDate, setFullDate] = useState(CURRENT_TIME);
  const saleIsFinished = useSelector(({ manageSale }) => manageSale.saleFinished);

  const onSecondPass = () => {
    setFullDate(new Date());
  };

  useEffect(() => {
    if (DISCOUNT_END_TIME <= new Date() && !saleIsFinished) {
      finishSale();
    }
  });

  useEffect(() => {
    if (DISCOUNT_END_TIME <= new Date()) {
      finishSale();
    }

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
