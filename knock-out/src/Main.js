import React from "react";

export class Main extends React.Component {
    render () {
        return (
            <div id="main-text">
                <p>Box is one of the most popular sports in the World!</p>
                <p>
                    If you want to become a living legend like
                    <a className="boxer-link" 
                        href="https://a-usyk.com/en/biography/" 
                        target="_blank" 
                        rel="noreferrer"> Oleksander Usyk
                    </a> or
                    <a className="boxer-link" 
                        href="https://kyiv.klichko.org/en/biography/" 
                        target="_blank" 
                        rel="noreferrer"> Vitali Klitchko
                    </a>
                        , join our comunity and
                    </p>
                    <p className="call-for-sign-up"><strong>SMASH THIS BUTTON RIGHT NOW!</strong></p>

                {/* Sign up button */}
                <a className="sign-up-btn" target="_blank" href="https://github.com/Excel231" rel="noreferrer">
                    <strong>
                        SIGN UP!
                    </strong>
                </a>
            </div>
        );
    };
};