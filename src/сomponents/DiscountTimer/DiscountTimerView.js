import React from "react";
import dateToTime from "./dateToTime";
import PropType from "prop-types";

class DiscountTimerView extends React.Component {
    render() {
        const {discountEndTime, currentTime} = this.props;
        return (
            <div>
                <p>
                    <strong>get 20% off.</strong>
                </p>
                <p>
                    {
                        discountEndTime <= currentTime ?
                        ("The sale is finished!") :
                        ("The discount will end in: " + dateToTime(discountEndTime, currentTime))
                    }
                </p>
            </div>
        );
    }
}

DiscountTimerView.propTypes = {
    discountTimeEnd: PropType.object,
    currentTime: PropType.object
}

export default DiscountTimerView;