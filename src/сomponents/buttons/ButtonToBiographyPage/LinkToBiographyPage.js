import React from "react";
import {Link} from "react-router-dom";

const LinkToBiographyPage = () => {
    return (
        <Link className="big-red-btn" to={"/BiographyPage"}>
            <strong>Go to biography page!</strong>
        </Link>
    );
}

export default LinkToBiographyPage;