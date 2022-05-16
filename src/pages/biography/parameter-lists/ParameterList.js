import React, {useState} from "react";
import bubbleSort from "../sorters/bubbleSort";

const ParameterList = ({id, fullName, age, birthYear, weight, belts, onSaveChanges}) => {

    const [currentEditedField, setCurrentEditedField] = useState(null);
    const [currentEditedValue, setCurrentEditedValue] = useState(null);

    const onEditClick = (field, value) => {
        setCurrentEditedField(field);
        setCurrentEditedValue(value);
    }

    const onFieldChange = (e) => {
        const value = e.target.value;
        setCurrentEditedValue(value);
    }

    const onFieldBlur = () => {
        onSaveChanges(currentEditedField, currentEditedValue, id);
        setCurrentEditedField(null);
        setCurrentEditedValue(null);
    }

    return (
        <ul className={"biography-ul"}>
            <li className={"biography-li"}>{fullName}</li>
            <li className={"biography-li"} onClick={() => onEditClick("age", age)}>
                {
                    currentEditedField === "age" ?
                        <input value={currentEditedValue}
                               onChange={onFieldChange}
                               onBlur={onFieldBlur}
                        /> : age
                }
            </li>

            <li className={"biography-li"} onClick={() => onEditClick("birthYear", birthYear)}>
                {
                    currentEditedField === "birthYear" ?
                        <input
                            value={currentEditedValue}
                            onChange={onFieldChange}
                            onBlur={onFieldBlur}
                        /> : birthYear
                }
            </li>

            <li className={"biography-li"} onClick={() => onEditClick("weight", weight)}>
                {
                    currentEditedField === "weight" ?
                        <input
                            value={currentEditedValue}
                            onChange={onFieldChange}
                            onBlur={onFieldBlur}
                        /> : weight
                }
            </li>

            <li className={"biography-li"}>
                <ul>
                    {
                        bubbleSort(belts).map(({beltName, year}, index) => (
                            <li key={index}>{year} - {beltName}</li>
                        ))
                    }
                </ul>
            </li>
        </ul>
    );
}

export default ParameterList;