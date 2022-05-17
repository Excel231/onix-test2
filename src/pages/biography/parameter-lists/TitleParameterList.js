import React from "react";
import "../../../styles.css";

const TitleParameterList = ({sortOnClick}) => {
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

export default TitleParameterList;