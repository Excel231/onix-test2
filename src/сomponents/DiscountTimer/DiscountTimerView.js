import React from 'react';
import PropType from 'prop-types';
import dateToTime from '../../helper/dateToTime';

const DiscountTimerView = ({
  discountEndTime,
  currentTime
}) => {
  return (
    <p>
      {
        discountEndTime <= currentTime
          ? ('The sale is finished!')
          : (`The discount will end in: ${dateToTime(discountEndTime, currentTime)}`)
      }
    </p>
  );
};

DiscountTimerView.propTypes = {
  discountEndTime: PropType.instanceOf(Date).isRequired,
  currentTime: PropType.instanceOf(Date).isRequired
};

export default DiscountTimerView;
