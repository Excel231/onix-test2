import React from "react";
import FooterLink from "./FooterLink";

const gitHubLink = "https://github.com/Excel231";
const designLink = "https://www.templatemonsterpreview.com/demo/54034.html?_gl=1*4dlq71*_ga*NjM5NjMwNjA0Lj" +
    "E2NDg4MzE2Mjk.*_ga_FTPYEGT5LY*MTY0ODgzODAyNy4yLjEuMTY0ODgzODE5NS4zMw..&_ga=2.21071039.50816026.164883" +
    "1629-639630604.1648831629";
const shLink = "https://diploma.programming.org.ua/ru/d/zPE9X6BvVKaZDAm93jw7Q12MYRgNGoqr";

class Footer extends React.Component {
    state = {
        linkText: ":",
    };


    changeSignUpText = (linkTitle) => {
        this.setState({linkText: linkTitle});
    }

    render() {
        return (
            <footer>
                <h3 className="author-name">by Ivan Honcharenko</h3>
                <h3>Also check {this.state.linkText}</h3>
                <FooterLink onButtonEnter={this.changeSignUpText}
                            linkTitle="GitHub"
                            footerLink={gitHubLink}
                            faClasses="fa-brands fa-github fa-2xl"/>
                <FooterLink onButtonEnter={this.changeSignUpText}
                            linkTitle="Design"
                            footerLink={designLink}
                            faClasses="fa-solid fa-object-group fa-2xl"/>
                <FooterLink onButtonEnter={this.changeSignUpText}
                            linkTitle="SH++"
                            footerLink={shLink}
                            faClasses="fa-solid fa-school fa-2xl"/>
            </footer>
        );
    }
}

export default Footer;