import React from "react";
import PropType from "prop-types";

const BigRedAnchorButton = ({changeText}) => {
    return (
        <a className="big-red-btn"
           href={"https://github.com/Excel231/onix-test2"}
           onClick={changeText}
           target="_blank"
           rel="noopener noreferrer">
           <strong>SIGN UP!</strong>
        </a>
    );
}

BigRedAnchorButton.propTypes = {
    changText: PropType.func
}

export default BigRedAnchorButton;