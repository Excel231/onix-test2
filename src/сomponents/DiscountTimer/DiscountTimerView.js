import React from 'react';
import PropType from 'prop-types';
import { useTranslation } from 'react-i18next';
import dateToTime from '../../helper/dateToTime';

const DiscountTimerView = ({
  saleIsFinished,
  discountEndTime,
  currentTime
}) => {
  const { t } = useTranslation('', { keyPrefix: 'discountTimer' });
  return (
    <p>
      {
        saleIsFinished
          ? t('discountFinished')
          : (`${t('discountText')} ${dateToTime(discountEndTime, currentTime)}`)
      }
    </p>
  );
};

DiscountTimerView.propTypes = {
  saleIsFinished: PropType.bool.isRequired,
  discountEndTime: PropType.instanceOf(Date).isRequired,
  currentTime: PropType.instanceOf(Date).isRequired
};

export default DiscountTimerView;
