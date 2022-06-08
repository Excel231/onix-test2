import React from "react";
import {Link} from "react-router-dom";

const BigRedLinkButton = ({children}) => {
    return (
        <Link className="big-red-btn" to={"/biography"}>
            {children}
        </Link>
    );
}

export default BigRedLinkButton;