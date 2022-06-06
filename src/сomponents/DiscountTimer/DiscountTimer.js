import React from "react";
import "./DiscountTimerView";
import DiscountTimerView from "./DiscountTimerView";

const CURRENT_TIME = new Date();

const DISCOUNT_END_TIME = new Date(
    CURRENT_TIME.getFullYear(),
    CURRENT_TIME.getMonth(),
    CURRENT_TIME.getDate() + 2,
    CURRENT_TIME.getHours(),
    CURRENT_TIME.getMinutes(),
    CURRENT_TIME.getSeconds()
);

class DiscountTimer extends React.Component {
    state = {
        fullDate: CURRENT_TIME
    }

    componentDidMount() {
        this.disountTimer = setInterval(() => this.onSecondPass(), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.disountTimer);
    }

    onSecondPass() {
        if (DISCOUNT_END_TIME.getTime() <= this.state.fullDate.getTime()) {
            clearInterval(this.disountTimer);
        }
        this.setState({fullDate: new Date()});
    }

    render() {
        return (
            <DiscountTimerView
                discountEndTime={DISCOUNT_END_TIME}
                currentTime={this.state.fullDate}
            />
        )
    }
}

export default DiscountTimer;