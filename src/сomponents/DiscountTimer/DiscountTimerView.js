import React from 'react';
import PropType from 'prop-types';
import { useTranslation } from 'react-i18next';
import dateToTime from '../../helper/dateToTime';

const DiscountTimerView = ({
  discountEndTime,
  currentTime
}) => {
  const { t } = useTranslation();
  return (
    <p>
      {
        discountEndTime <= currentTime
          ? t('discountFinished')
          : t(`${t('discountText')} ${dateToTime(discountEndTime, currentTime)}`)
      }
    </p>
  );
};

DiscountTimerView.propTypes = {
  discountEndTime: PropType.instanceOf(Date).isRequired,
  currentTime: PropType.instanceOf(Date).isRequired
};

export default DiscountTimerView;
