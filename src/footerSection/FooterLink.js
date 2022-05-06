import React from "react";

const FooterLink = ({onButtonEnter, linkTitle, footerLink, faClasses}) => {
    return (
        <a className="link-icon"
           onMouseEnter={() => onButtonEnter(linkTitle)}
           target="_blank"
           rel="noreferrer"
           title={linkTitle}
           href={footerLink}>
            <i className={faClasses}/>
        </a>
    );
}

export default FooterLink;