import React from "react";
import ChangeableParameterItem from "../../ChangeableParameterItem/ChangeableParameterItem";
import bubbleSort from "../../../helper/sorters/bubbleSort";
import * as PropType from "prop-types";

const ParameterListView = (
    {
        fullName,
        birthYear,
        photo,
        weight,
        belts,
        currentEditedField,
        currentEditedValue,
        onEditClick,
        onFieldChange,
        onFieldBlur,
        onKeyPressed,
        listStyle,
    }
) => {
    return (
        <ul className={listStyle}>

            <li className={"biography-li"}>
                <img
                    className={"boxer-photo"} alt={fullName} src={photo}
                    onLoad={() => console.log(`Photo of ${fullName} has loaded successfully!`)}
                    onError={() => console.log(`Error occurred with the photo of ${fullName}!`)}
                />
            </li>

            <li className={"biography-li"}><p>{fullName}</p></li>

            <ChangeableParameterItem
                parameter={birthYear}
                parameterName={"birthYear"}
                currentEditedValue={currentEditedValue}
                currentEditedField={currentEditedField}
                onFieldBlur={onFieldBlur}
                onKeyPressed={onKeyPressed}
                onEditClick={onEditClick}
                onFieldChange={onFieldChange}
            />

            <ChangeableParameterItem
                parameter={weight}
                parameterName={"weight"}
                currentEditedValue={currentEditedValue}
                currentEditedField={currentEditedField}
                onFieldBlur={onFieldBlur}
                onKeyPressed={onKeyPressed}
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

ParameterListView.propTypes = {
    fullName: PropType.string,
    age: PropType.number,
    birthYear: PropType.number,
    weight: PropType.number,
    belts: PropType.array,
    currentEditedField: PropType.any,
    currentEditedValue: PropType.any,
    onEditClick: PropType.func,
    onFieldChange: PropType.func,
    onFieldBlur: PropType.func
}

export default ParameterListView;