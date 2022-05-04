import React from "react";

function FooterLink(props) {
    return (
        <a className="link-icon"
           onMouseEnter={()=>props.buttonAction(props.linkTitle)}
           target="_blank"
           rel="noreferrer"
           title={props.linkTitle}
           href={props.footerLink}>
            <i className={props.faClasses}/>
        </a>
    );
}

export default FooterLink;