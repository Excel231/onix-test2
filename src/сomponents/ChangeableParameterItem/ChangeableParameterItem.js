import React from "react";
import PropType from "prop-types";

class ChangeableParameterItem extends React.Component {
    render() {
        const {
            parameter,
            parameterName,
            currentEditedValue,
            currentEditedField,
            onEditClick,
            onFieldChange,
            onFieldBlur
        } = this.props

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
                        /> : <p>{parameter}</p>
                }
            </li>
        );
    }
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