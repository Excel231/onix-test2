import React from "react";

const ButtonToBiographyPage = ({changePage}) => {
    return (
        <button className="big-red-btn"
           onClick={changePage}>
            <strong>Go to biography page!</strong>
        </button>
    );
}

export default ButtonToBiographyPage;