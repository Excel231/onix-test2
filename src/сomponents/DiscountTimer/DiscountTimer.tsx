import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import DiscountTimerView from './DiscountTimerView';
import { CURRENT_TIME, DISCOUNT_END_TIME } from '../../constants/constants';

interface Props {
  finishSale: () => void;
}

interface SelectorProps {
  manageSale: {
    saleFinished: boolean;
  }
}

const DiscountTimer: React.FC<Props> = ({ finishSale }) => {
  const [fullDate, setFullDate] = useState(CURRENT_TIME);
  const saleIsFinished = useSelector(({ manageSale }: SelectorProps) => manageSale.saleFinished);

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
      saleIsFinished={saleIsFinished}
      discountEndTime={DISCOUNT_END_TIME}
      currentTime={fullDate}
    />
  );
};

export default DiscountTimer;
