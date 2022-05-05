import React from "react";

function SignUpButton(props) {
    return (
        <a className="sign-up-btn"
           onClick={props.buttonAction}
           target="_blank"
           href="https://github.com/Excel231"
           rel="noreferrer">
           <strong>SIGN UP!</strong>
        </a>
    );
}

export default SignUpButton;