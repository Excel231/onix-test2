import React, {useState} from "react";
import PropType from "prop-types";

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

BoxerLink.propTypes = {
    boxerSite: PropType.string,
    boxerName: PropType.string
}

export default BoxerLink;