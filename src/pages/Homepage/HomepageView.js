import React from "react";
import PropType from "prop-types";
import BoxerLink from "../../сomponents/BoxerLink/BoxerLink";
import DiscountTimer from "../../сomponents/DiscountTimer/DiscountTimer";
import BigRedAnchorButton from "../../сomponents/buttons/BigRedAnchorButton/BigRedAnchorButton";
import BigRedLinkButton from "../../сomponents/buttons/BigRedLinkButton/BigRedLinkButton";

const HomepageView = ({signUpText, changeSignUpText}) => {
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
                <BigRedAnchorButton changeText={changeSignUpText}/>
                <br/>
                <BigRedLinkButton><strong>Go to biography page!</strong></BigRedLinkButton>
            </div>
        </>
    );
}

HomepageView.propTypes = {
    signUpText: PropType.string,
    changeSignUpText: PropType.func,
}

export default HomepageView;