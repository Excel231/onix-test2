import React from "react";

export class Footer extends React.Component {
    render () {
        return (
            <footer>
                <h3 className="author-name">by Ivan Honcharenko</h3>
    
                <a className="link-icon" 
                    title="My GitHub" 
                    target="_blank" 
                    href="https://github.com/Excel231" 
                    rel="noreferrer">
                    <i className="fa-brands fa-github fa-2xl"></i>
                </a>
    
                <a className="link-icon" 
                    title="Original design" 
                    target="_blank"
                    href="https://www.templatemonsterpreview.com/demo/54034.html?_gl=1*4dlq71*_ga*NjM5NjMwNjA0LjE2NDg4MzE2Mjk.*_ga_FTPYEGT5LY*MTY0ODgzODAyNy4yLjEuMTY0ODgzODE5NS4zMw..&_ga=2.21071039.50816026.1648831629-639630604.1648831629" 
                    rel="noreferrer">
                    <i className="fa-solid fa-object-group fa-2xl"></i>
                </a>
    
                <a className="link-icon" 
                    title="SH++" 
                    target="_blank"
                    href="https://diploma.programming.org.ua/ru/d/zPE9X6BvVKaZDAm93jw7Q12MYRgNGoqr" 
                    rel="noreferrer">
                    <i className="fa-solid fa-school fa-2xl"></i>
                </a>
          </footer>
        );
    };
};