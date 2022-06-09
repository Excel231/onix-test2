import BigRedAnchorButton from "../BigRedAnchorButton/BigRedAnchorButton";
import React from "react";
import PropType from "prop-types";
import "../styles.css";


const BigRedButton = ({children, onClick}) => {
    return (
        <button
            className="big-red-btn"
            onClick={onClick}
        >
            {children}
        </button>
    );
}

BigRedAnchorButton.propTypes = {
    children: PropType.any,
    onClick: PropType.func
}


export default BigRedButton;