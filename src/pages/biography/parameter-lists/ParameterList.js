import React from "react";
import bubbleSort from "../sorters/bubbleSort";
import PropType from "prop-types";
import ChangeableParameterItem from "./ChangeableParameterItem";

class ParameterList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentEditedField: null,
            currentEditedValue: null,
        };
    }

    onEditClick = (field, value) => {
        this.setState({currentEditedField: field, currentEditedValue: value});
    }

    onFieldChange = (e) => {
        const value = e.target.value;
        this.setState({currentEditedValue: value});
    }

    onFieldBlur = () => {
        this.props.onSaveChanges(this.state.currentEditedField, this.state.currentEditedValue, this.props.id);
        this.setState({currentEditedField: null});
        this.setState({currentEditedValue: null});
    }

    render() {
        const {fullName, age, birthYear, weight, belts} = this.props;
        return (
            <ul className={"biography-ul"}>
                <li className={"biography-li"}><p>{fullName}</p></li>

                <ChangeableParameterItem
                    parameter={age}
                    parameterName={"age"}
                    currentEditedValue={this.state.currentEditedValue}
                    currentEditedField={this.state.currentEditedField}
                    onFieldBlur={this.onFieldBlur}
                    onEditClick={this.onEditClick}
                    onFieldChange={this.onFieldChange}
                />

                <ChangeableParameterItem
                    parameter={birthYear}
                    parameterName={"birthYear"}
                    currentEditedValue={this.state.currentEditedValue}
                    currentEditedField={this.state.currentEditedField}
                    onFieldBlur={this.onFieldBlur}
                    onEditClick={this.onEditClick}
                    onFieldChange={this.onFieldChange}
                />

                <ChangeableParameterItem
                    parameter={weight}
                    parameterName={"weight"}
                    currentEditedValue={this.state.currentEditedValue}
                    currentEditedField={this.state.currentEditedField}
                    onFieldBlur={this.onFieldBlur}
                    onEditClick={this.onEditClick}
                    onFieldChange={this.onFieldChange}
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