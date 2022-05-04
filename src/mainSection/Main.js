import React from "react";
import BoxerLink from "./BoxerLink";
import SignUpButton from "./SignUpButton";

function Main() {
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
            <p className="call-for-sign-up"><strong>SMASH THIS BUTTON RIGHT NOW!</strong></p>
            <SignUpButton/>
        </div>
    );
}

export default Main;