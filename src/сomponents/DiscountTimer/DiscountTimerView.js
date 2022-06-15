import React from 'react';
import PropType from 'prop-types';
import dateToTime from '../../helper/date-to-time/dateToTime';

function DiscountTimerView({ discountEndTime, currentTime }) {
  return (
    <div>
      <p>
        <strong>get 20% off.</strong>
      </p>
      <p>
        {
                    discountEndTime <= currentTime
                      ? ('The sale is finished!')
                      : (`The discount will end in: ${dateToTime(discountEndTime, currentTime)}`)
                }
      </p>
    </div>
  );
}

DiscountTimerView.propTypes = {
  discountTimeEnd: PropType.object,
  currentTime: PropType.object
};

export default DiscountTimerView;
