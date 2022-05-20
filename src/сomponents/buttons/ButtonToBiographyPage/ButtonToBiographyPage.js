import React from "react";
import PropType from "prop-types";

const ButtonToBiographyPage = ({changePage}) => {
    return (
        <button className="big-red-btn"
           onClick={changePage}>
            <strong>Go to biography page!</strong>
        </button>
    );
}

ButtonToBiographyPage.propTypes = {
    changePage: PropType.func
}

export default ButtonToBiographyPage;