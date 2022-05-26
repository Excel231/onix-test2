import React from "react";
import PropType from "prop-types";
import ParameterListView from "./ParameterListView";

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
        this.props.handleParameterIsEdited();
    }

    onFieldChange = (e) => {
        const value = e.target.value;
        this.setState({currentEditedValue: value});
    }

    onFieldBlur = () => {
        this.props.onSaveChanges(this.state.currentEditedField, Number(this.state.currentEditedValue), this.props.id);
        this.setState({currentEditedField: null});
        this.setState({currentEditedValue: null});
        this.props.handleParameterIsEdited();
    }

    render() {
        const {fullName, age, birthYear, weight, belts, isActiveElement, listStyle} = this.props;
        return (
            <ParameterListView
                fullName={fullName}
                age={age}
                birthYear={birthYear}
                weight={weight}
                belts={belts}
                currentEditedField={this.state.currentEditedField}
                currentEditedValue={this.state.currentEditedValue}
                onEditClick={this.onEditClick}
                onFieldChange={this.onFieldChange}
                onFieldBlur={this.onFieldBlur}
                isActiveElement={isActiveElement}
                listStyle={listStyle}
            />
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