import React from "react";
import PropType from "prop-types";

const ChangeableParameterItem = (
    {
        parameter,
        parameterName,
        currentEditedValue,
        currentEditedField,
        onFieldBlur,
        onKeyPressed,
        onEditClick,
        onFieldChange,
    }
) => {

    return (
        <li className={"biography-li"} onClick={() => onEditClick(parameterName, parameter)}>
            {
                currentEditedField === parameterName ?
                    <input className="biography-text-input"
                           type={"number"}
                           autoFocus
                           value={currentEditedValue}
                           onChange={onFieldChange}
                           onBlur={onFieldBlur}
                           onKeyPress={onKeyPressed}
                    /> : <p>{parameter}</p>
            }
        </li>
    );
}

ChangeableParameterItem.propTypes = {
    parameter: PropType.number,
    parameterName: PropType.string,
    currentEditedValue: PropType.any,
    currentEditedField: PropType.string,
    onEditClick: PropType.func,
    onFieldChange: PropType.func,
    onFieldBlur: PropType.func
}

export default ChangeableParameterItem;