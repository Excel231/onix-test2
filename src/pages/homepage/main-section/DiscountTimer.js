import React from "react";
import dateToTime from "./dateToTime";

const TIME_TILL_DISCOUNT_END = new Date(2022, 4, 25, 0, 0, 0);

class DiscountTimer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            fullDate: new Date()
        }
    }

    componentDidMount() {
        this.disountTimer = setInterval(() => this.onSecondPass(), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.disountTimer);
    }

    onSecondPass() {
        if (TIME_TILL_DISCOUNT_END.getTime() <= this.state.fullDate.getTime()) {
            clearInterval(this.disountTimer);
        }
        this.setState({fullDate: new Date()});
    }

    render() {
        return (
            <div>
                <p><strong>get 20% off.</strong></p>
                <p>
                    {TIME_TILL_DISCOUNT_END <= this.state.fullDate ?
                        ("The sale is finished!") :
                        ("The discount will end in: " + dateToTime(TIME_TILL_DISCOUNT_END, this.state.fullDate))
                    }
                </p>
            </div>
        )
    }
}

export default DiscountTimer;