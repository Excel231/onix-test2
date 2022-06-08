import React, {useState} from "react";
import "./FooterView";
import FooterView from "./FooterView";

const gitHubLink = "https://github.com/Excel231";
const designLink = "https://www.templatemonsterpreview.com/demo/54034.html?_gl=1*4dlq71*_ga*NjM5NjMwNjA0Lj" +
    "E2NDg4MzE2Mjk.*_ga_FTPYEGT5LY*MTY0ODgzODAyNy4yLjEuMTY0ODgzODE5NS4zMw..&_ga=2.21071039.50816026.164883" +
    "1629-639630604.1648831629";
const shLink = "https://diploma.programming.org.ua/ru/d/zPE9X6BvVKaZDAm93jw7Q12MYRgNGoqr";

const Footer = () => {

    const [linkText, setLinkText] = useState(":");

    const changeSignUpText = (linkTitle) => {
        setLinkText(linkTitle);
    }

    return (
        <FooterView
            gitHubLink={gitHubLink}
            designLink={designLink}
            shLink={shLink}
            linkText={linkText}
            changeSignUpText={changeSignUpText}
        />
    );
}

export default Footer;