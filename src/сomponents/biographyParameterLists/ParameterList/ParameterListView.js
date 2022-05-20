import React from "react";
import ChangeableParameterItem from "../../ChangeableParameterItem/ChangeableParameterItem";
import bubbleSort from "../../../helper/sorters/bubbleSort";
import * as PropType from "prop-types";

class ParameterListView extends React.Component {
    render() {
        const {
            fullName,
            age,
            birthYear,
            weight,
            belts,
            currentEditedField,
            currentEditedValue,
            onEditClick,
            onFieldChange,
            onFieldBlur
        } = this.props;

        return(
            <ul className={"biography-ul"}>
                <li className={"biography-li"}><p>{fullName}</p></li>

                <ChangeableParameterItem
                    parameter={age}
                    parameterName={"age"}
                    currentEditedValue={currentEditedValue}
                    currentEditedField={currentEditedField}
                    onFieldBlur={onFieldBlur}
                    onEditClick={onEditClick}
                    onFieldChange={onFieldChange}
                />

                <ChangeableParameterItem
                    parameter={birthYear}
                    parameterName={"birthYear"}
                    currentEditedValue={currentEditedValue}
                    currentEditedField={currentEditedField}
                    onFieldBlur={onFieldBlur}
                    onEditClick={onEditClick}
                    onFieldChange={onFieldChange}
                />

                <ChangeableParameterItem
                    parameter={weight}
                    parameterName={"weight"}
                    currentEditedValue={currentEditedValue}
                    currentEditedField={currentEditedField}
                    onFieldBlur={onFieldBlur}
                    onEditClick={onEditClick}
                    onFieldChange={onFieldChange}
                />

                <li className={"biography-li"}>
                    <ul>
                        {
                            bubbleSort(belts).map(({beltName, year}, index) => (
                                <li className={"belt"} key={index}>{year} - {beltName}</li>
                            ))
                        }
                    </ul>
                </li>
            </ul>
        );
    }
}

ParameterListView.propTypes = {
    fullName: PropType.string,
    /*age, birthYear and weight are changeable*/
    age: PropType.any,
    birthYear: PropType.any,
    weight: PropType.any,
    belts: PropType.array,
    currentEditedField: PropType.any,
    currentEditedValue: PropType.any,
    onEditClick: PropType.func,
    onFieldChange: PropType.func,
    onFieldBlur: PropType.func
}

export default ParameterListView;