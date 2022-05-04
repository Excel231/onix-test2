import React from "react";

function SignUpButton(props) {
    const buttonAction = props.buttonAction;

    return (
        <a className="sign-up-btn"
           onClick={buttonAction}
           target="_blank"
           href="https://github.com/Excel231"
           rel="noreferrer">
           <strong>SIGN UP!</strong>
        </a>
    );
}

export default SignUpButton;