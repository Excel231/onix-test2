import React from "react";
import PropType from "prop-types";

const SignUpButton = ({changeText}) => {
    return (
        <a className="big-red-btn"
           href={"https://github.com/Excel231/onix-test2"}
           onClick={changeText}
           target="_blank"
           rel="noreferrer">
           <strong>SIGN UP!</strong>
        </a>
    );
}

SignUpButton.propTypes = {
    changText: PropType.func
}

export default SignUpButton;