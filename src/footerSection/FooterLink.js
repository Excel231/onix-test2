import React from "react";

function FooterLink(props) {
    return (
        <a className="link-icon" 
            target="_blank" 
            rel="noreferrer"
            title={props.linkTitle}
            href={props.footerLink}>
            <i className={props.faClasses}></i>
        </a>
    );
};

export default FooterLink;