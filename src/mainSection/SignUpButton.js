import React, { useState } from "react";

const firstCallToSignUp = "SIGN UP!";
const secondCallToSignUp = "NOW!";

function SignUpButton() {
    
    const [currentText, setCurrentText] = useState(firstCallToSignUp);

    function handleHover() {
        setCurrentText(currentText === firstCallToSignUp ? secondCallToSignUp : firstCallToSignUp);
    };

    return (
        <a onMouseEnter = {handleHover}
           className="sign-up-btn"
           target="_blank"                 
           href="https://github.com/Excel231" 
           rel="noreferrer">
           <strong>{currentText}</strong>
        </a>
    );
};

export default SignUpButton;