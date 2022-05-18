import React, {useState} from "react";
import bubbleSort from "../sorters/bubbleSort";
import PropType from "prop-types";

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
            <li className={"biography-li"}><p>{fullName}</p></li>

            <li className={"biography-li"} onClick={() => onEditClick("age", age)}>
                {
                    currentEditedField === "age" ?
                        <input className="biography-text-input"
                               autoFocus
                               value={currentEditedValue}
                               onChange={onFieldChange}
                               onBlur={onFieldBlur}
                        /> : <p>{age}</p>
                }
            </li>

            <li className={"biography-li"} onClick={() => onEditClick("birthYear", birthYear)}>
                {
                    currentEditedField === "birthYear" ?
                        <input className="biography-text-input"
                               autoFocus
                               value={currentEditedValue}
                               onChange={onFieldChange}
                               onBlur={onFieldBlur}
                        /> : <p>{birthYear}</p>
                }
            </li>

            <li className={"biography-li"} onClick={() => onEditClick("weight", weight)}>
                {
                    currentEditedField === "weight" ?
                        <input className="biography-text-input"
                               autoFocus
                               value={currentEditedValue}
                               onChange={onFieldChange}
                               onBlur={onFieldBlur}
                        /> : <p>{weight}</p>
                }
            </li>

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

ParameterList.propTypes = {
    id: PropType.number,
    fullName: PropType.string,
    age: PropType.number,
    birthYear: PropType.number,
    weight: PropType.number,
    belts: PropType.array,
    onSaveChanges: PropType.func
}

export default ParameterList;