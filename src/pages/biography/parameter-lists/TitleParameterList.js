import React from "react";
import "../../../styles.css";
import PropType from "prop-types";
import ParameterList from "./ParameterList";

class TitleParameterList extends React.Component {
    render() {
        const sortOnClick = this.props.sortOnClick;
        return (
            <ul className="biography-ul">
                <li className="biography-li" onClick={() => sortOnClick("fullName")}>Full Name</li>
                <li className="biography-li" onClick={() => sortOnClick("age")}>Age</li>
                <li className="biography-li" onClick={() => sortOnClick("birthYear")}>Birth Year</li>
                <li className="biography-li" onClick={() => sortOnClick("weight")}>Weight</li>
                <li className="biography-li belt" onClick={() => sortOnClick("belts")}>Year - Belts</li>
            </ul>
        );
    }
}

ParameterList.propTypes = {
    sortOnClick: PropType.func
}

export default TitleParameterList;