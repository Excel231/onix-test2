import React from "react";

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

export default BigRedButton;