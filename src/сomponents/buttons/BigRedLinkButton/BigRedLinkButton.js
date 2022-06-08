import React from "react";
import {Link} from "react-router-dom";
import BigRedAnchorButton from "../BigRedAnchorButton/BigRedAnchorButton";
import PropType from "prop-types";

const BigRedLinkButton = ({children}) => {
    return (
        <Link className="big-red-btn" to={"/biography"}>
            {children}
        </Link>
    );
}

BigRedAnchorButton.propTypes = {
    children: PropType.any
}

export default BigRedLinkButton;