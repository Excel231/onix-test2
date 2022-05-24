import React from "react";
import BoxerLink from "../BoxerLink/BoxerLink";
import DiscountTimer from "../DiscountTimer/DiscountTimer";
import SignUpButton from "../buttons/SignUpButton/SignUpButton";
import LinkToBiographyPage from "../buttons/ButtonToBiographyPage/LinkToBiographyPage";
import PropType from "prop-types";

class HomepageMainSectionView extends React.Component {
    render() {
        const {signUpText, changeSignUpText} = this.props;
        return (
            <>
                <h2>Want to become stronger? Looking for worthy opponents? Our gym is for YOU!</h2>
                <div id="main-text">
                    <p>Box is one of the most popular sports in the World!</p>
                    <p>
                        If you want to become a living legend like {" "}
                        <BoxerLink boxerName="Vitali Klitchko" boxerSite="https://kyiv.klichko.org/en/biography/"/>
                        {" "} or {}
                        <BoxerLink boxerName="Oleksander Usyk" boxerSite="https://a-usyk.com/en/biography/"/>
                        , join our community now and
                    </p>
                    <DiscountTimer/>
                    <p className="call-to-sign-up"><strong>{signUpText}</strong></p>
                    <SignUpButton changeText={changeSignUpText}/>
                    <br/>
                    <LinkToBiographyPage/>
                </div>
            </>
        );
    }
}

HomepageMainSectionView.propTypes = {
    signUpText: PropType.string,
    changeSignUpText: PropType.func,
}

export default HomepageMainSectionView;