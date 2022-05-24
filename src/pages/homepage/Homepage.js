import React, {useState} from "react";
import "../../styles.css"
import HomepageView from "./HomepageView";

const SIGN_UP_BUTTON_TEXT = "SMASH THIS BUTTON RIGHT NOW!";
const SIGN_UP_BUTTON_CHANGED_TEXT = "WELCOME TO THE CLUB, BUDDY!"

const Homepage = () => {
    const [signUpText, setSignUpText] = useState(SIGN_UP_BUTTON_TEXT);

    const changeSignUpText = () => {
        setSignUpText(SIGN_UP_BUTTON_CHANGED_TEXT);
    }

    return (
        <HomepageView
            signUpText={signUpText}
            changeSignUpText={changeSignUpText}
        />
    );
}

export default Homepage;