import React, {useState} from "react";

const defaultTextDecoration = "#880022 underline";
const changedTextDecoration = "none";

function BoxerLink(props) {
    const [currentTextDecoration, setTextDecoration] = useState("none");

    function handleHover() {
        setTextDecoration(currentTextDecoration === defaultTextDecoration ?
            changedTextDecoration :
            defaultTextDecoration);
    }

    return (
        <a className="boxer-link"
           onMouseEnter={handleHover}
           onMouseLeave={handleHover}
           style={{"textDecoration": currentTextDecoration}}
           target="_blank"
           href={props.boxerSite}
           rel="noreferrer">{props.boxerName}
        </a>
    );
}

export default BoxerLink;