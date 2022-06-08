import React from "react";
import PropType from "prop-types";
import BigRedAnchorButton from "../BigRedAnchorButton/BigRedAnchorButton";

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