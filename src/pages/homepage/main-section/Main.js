import React, {useState} from "react";
import BoxerLink from "./BoxerLink";
import SignUpButton from "./buttons/SignUpButton";
import ButtonToBiographyPage from "./buttons/ButtonToBiographyPage";
import PropType from "prop-types";

const SIGN_UP_BUTTON_TEXT = "SMASH THIS BUTTON RIGHT NOW!";
const SIGN_UP_BUTTON_CHANGED_TEXT = "WELCOME TO THE CLUB, BUDDY!"

const Main = ({changeCurrentPage}) => {
    const [signUpText, setSignUpText] = useState(SIGN_UP_BUTTON_TEXT);

    function changeSignUpText() {
        setSignUpText(SIGN_UP_BUTTON_CHANGED_TEXT);
    }

    return (
        <div id="main-text">

            <p>Box is one of the most popular sports in the World!</p>
            <p>
                If you want to become a living legend like {" "}
                <BoxerLink boxerName="Vitali Klitchko" boxerSite="https://kyiv.klichko.org/en/biography/"/>
                {" "} or {}
                <BoxerLink boxerName="Oleksander Usyk" boxerSite="https://a-usyk.com/en/biography/"/>
                , join our community and
            </p>
            <p className="call-to-sign-up"><strong>{signUpText}</strong></p>
            <SignUpButton changeText={changeSignUpText}/>
            <br/>
            <ButtonToBiographyPage changePage={changeCurrentPage}/>
        </div>
    );
}

Main.propTypes = {
    changeCurrentPage: PropType.func
}

export default Main;