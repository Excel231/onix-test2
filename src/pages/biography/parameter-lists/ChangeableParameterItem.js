import React from "react";
import PropType from "prop-types";

const ChangeableParameterItem = ({
                                     parameter,
                                     parameterName,
                                     currentEditedValue,
                                     currentEditedField,
                                     onEditClick,
                                     onFieldChange,
                                     onFieldBlur
                                 }) => {
    return (
        <li className={"biography-li"} onClick={() => onEditClick(parameterName, parameter)}>
            {
                currentEditedField === parameterName ?
                    <input className="biography-text-input"
                           autoFocus
                           value={currentEditedValue}
                           onChange={onFieldChange}
                           onBlur={onFieldBlur}
                    /> : <p>{parameter}</p>
            }
        </li>
    );
}

ChangeableParameterItem.propTypes = {
    parameter: PropType.any,
    parameterName: PropType.string,
    currentEditedValue: PropType.any,
    currentEditedField: PropType.string,
    onEditClick: PropType.func,
    onFieldChange: PropType.func,
    onFieldBlur: PropType.func
}

export default ChangeableParameterItem;