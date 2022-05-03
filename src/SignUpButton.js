import React from "react";

const firstCallToSignUp = "SIGN UP!";
const secondCallToSignUp = "NOW!";

export class SignUpButton extends React.Component {
    constructor(props) {
      super(props);
    
      this.state = {
         callForAction: firstCallToSignUp
      };

      this.handleHover = this.handleHover.bind(this);
    };

    handleHover() {
        this.setState({
            callForAction: this.state.callForAction === firstCallToSignUp ? secondCallToSignUp : firstCallToSignUp
        });
    };

    render() {
        return (
            <a onMouseEnter = {this.handleHover} 
                className="sign-up-btn"
                target="_blank" 
                href="https://github.com/Excel231" 
                rel="noreferrer">
                <strong>{this.state.callForAction}</strong>
            </a>
        );
    };
};