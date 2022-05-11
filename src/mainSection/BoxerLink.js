import React, {useState} from "react";

const BoxerLink = ({boxerSite, boxerName}) => {
    const [textIsDecorated, setTextDecoration] = useState(false);

    function handleHover() {
        setTextDecoration(!textIsDecorated);
    }

    return (
        <a className={"boxer-link " + (textIsDecorated ? "boxer-link-decoration" : "")}
           onMouseEnter={handleHover}
           onMouseLeave={handleHover}
           target="_blank"
           href={boxerSite}
           rel="noreferrer">{boxerName}
        </a>
    );
}

export default BoxerLink;