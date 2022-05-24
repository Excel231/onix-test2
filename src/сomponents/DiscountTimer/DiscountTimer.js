import React from "react";
import "./DiscountTimerView";
import DiscountTimerView from "./DiscountTimerView";

const DISCOUNT_END_TIME = new Date(2022, 4, new Date().getDate() + 2, 0, 0, 0);

class DiscountTimer extends React.Component {
    state = {
        fullDate: new Date()
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