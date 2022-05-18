import React from "react";
import PropType from "prop-types";

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

FooterLink.propTypes = {
    onButtonEnter: PropType.func,
    linkTitle: PropType.string,
    footerLink: PropType.string,
    faClasses: PropType.string
}

export default FooterLink;