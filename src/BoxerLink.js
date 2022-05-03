import React from "react";

function BoxerLink(props) {
    return (
        <a className="boxer-link" 
            target="_blank" 
            href={props.boxerSite} 
            rel="noreferrer"> {props.boxerName}
        </a>
    );
};

export default BoxerLink;