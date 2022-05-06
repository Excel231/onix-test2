import React, {useState} from "react";

const DEFAULT_TEXT_DECORATION = "#880022 underline";
const CHANGED_TEXT_DECORATION = "none";

const BoxerLink = ({boxerSite, boxerName}) => {
    const [currentTextDecoration, setTextDecoration] = useState("none");

    function handleHover() {
        setTextDecoration(currentTextDecoration === DEFAULT_TEXT_DECORATION ?
            CHANGED_TEXT_DECORATION :
            DEFAULT_TEXT_DECORATION);
    }

    return (
        <a className="boxer-link"
           onMouseEnter={handleHover}
           onMouseLeave={handleHover}
           style={{textDecoration: currentTextDecoration}}
           target="_blank"
           href={boxerSite}
           rel="noreferrer">{boxerName}
        </a>
    );
}

export default BoxerLink;