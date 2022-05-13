import React from "react";

const SignUpButton = (onButtonClick) => {
    return (
        <a className="big-red-btn"
           href={"https://github.com/Excel231/onix-test2"}
           onClick={onButtonClick}
           target="_blank"
           rel="noreferrer">
           <strong>SIGN UP!</strong>
        </a>
    );
}

export default SignUpButton;