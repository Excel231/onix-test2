import React, {useState} from "react";
import PropType from "prop-types";
import HomepageMainSectionView from "./HomepageMainSectionView";

const SIGN_UP_BUTTON_TEXT = "SMASH THIS BUTTON RIGHT NOW!";
const SIGN_UP_BUTTON_CHANGED_TEXT = "WELCOME TO THE CLUB, BUDDY!"

const HomepageMainSection = ({changeCurrentPage}) => {
    const [signUpText, setSignUpText] = useState(SIGN_UP_BUTTON_TEXT);

    const changeSignUpText = () => {
        setSignUpText(SIGN_UP_BUTTON_CHANGED_TEXT);
    }

    return (
       <HomepageMainSectionView
           signUpText={signUpText}
           changeSignUpText={changeSignUpText}
           changeCurrentPage={changeCurrentPage}
       />
    );
}

HomepageMainSection.propTypes = {
    changeCurrentPage: PropType.func
}

export default HomepageMainSection;