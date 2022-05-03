import React from "react";
import FooterLink from "./FooterLink";

function Footer() {
        return (
        <footer>
            <h3 className="author-name">by Ivan Honcharenko</h3>
            <FooterLink linkTitle="My GitHub" 
                        footerLink="https://github.com/Excel231" 
                        faClasses="fa-brands fa-github fa-2xl"/>
            <FooterLink linkTitle="Original Design" 
                        footerLink="https://www.templatemonsterpreview.com/demo/54034.html?_gl=1*4dlq71*_ga*NjM5NjMwNjA0LjE2NDg4MzE2Mjk.*_ga_FTPYEGT5LY*MTY0ODgzODAyNy4yLjEuMTY0ODgzODE5NS4zMw..&_ga=2.21071039.50816026.1648831629-639630604.1648831629" 
                        faClasses="fa-solid fa-object-group fa-2xl"/>
            <FooterLink linkTitle="SH++" 
                        footerLink="https://diploma.programming.org.ua/ru/d/zPE9X6BvVKaZDAm93jw7Q12MYRgNGoqr" 
                        faClasses="fa-solid fa-school fa-2xl"/>
        </footer>
    );
};

export default Footer;