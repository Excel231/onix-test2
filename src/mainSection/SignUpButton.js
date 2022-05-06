import React from "react";

const SignUpButton = ({onButtonClick}) => {
    return (
        <a className="sign-up-btn"
           onClick={onButtonClick}
           target="_blank"
           href="https://github.com/Excel231"
           rel="noreferrer">
           <strong>SIGN UP!</strong>
        </a>
    );
}

export default SignUpButton;