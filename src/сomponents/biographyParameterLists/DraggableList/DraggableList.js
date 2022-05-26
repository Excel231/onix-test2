import ParameterList from "../ParameterList/ParameterList";
import PropType from "prop-types";
import React from "react";

const DEFAULT_INACTIVE_STYLE = "biography-ul";

const DEFAULT_ACTIVE_STYLE = "selected-biography-ul";

class DraggableList extends React.Component {

    state = {
        currentDraggedPerson: null,
        currentActivePerson: null,
        activeStyle: DEFAULT_ACTIVE_STYLE,
        parameterIsEdited: false
    }

    dragStartHandler = (person) => {
        this.setState({currentDraggedPerson: person});
    }

    dragOverHandler = (e) => {
        e.preventDefault();
    }

    dropHandler = (e, personToDropOn) => {
        e.preventDefault();
        const newArr = this.props.personsOnScreen.map((currentPerson) => {
            if (currentPerson.id === personToDropOn.id) return this.state.currentDraggedPerson;
            if (currentPerson.id === this.state.currentDraggedPerson.id) return personToDropOn;
            return currentPerson;
        })
        this.props.changePersonsOnScreen(newArr);
    }

    handleMouseClick = (person) => {
        this.setState({currentActivePerson: person});
    }

    handleParameterIsEdited = () => {
        this.setState((state) => {
            return {parameterIsEdited: !state.parameterIsEdited}
        });
    }

    handleKeypress = (e) => {
        if (this.state.parameterIsEdited) return;
        const keyPressed = e.key;

        switch (keyPressed) {
            case ("1"):
                this.setState({activeStyle: DEFAULT_ACTIVE_STYLE + "-white"});
                break;

            case ("2"):
                this.setState({activeStyle: DEFAULT_ACTIVE_STYLE + "-green"});
                break;

            case ("3"):
                this.setState({activeStyle: DEFAULT_ACTIVE_STYLE + "-blue"});
                break;

            case("ArrowUp"):
                this.setState({
                    currentActivePerson: this.props.personsOnScreen[this.getIndexOfActivePerson() - 1]
                });
                break;

            case("ArrowDown"):
                this.setState({
                    currentActivePerson: this.props.personsOnScreen[this.getIndexOfActivePerson() + 1]
                });
                break;

            default:
                this.setState({activeStyle: DEFAULT_ACTIVE_STYLE});
                break;
        }
    }

    getIndexOfActivePerson() {
        return this.props.personsOnScreen.indexOf(this.state.currentActivePerson);
    }

    componentDidMount() {
        document.addEventListener("keydown", (e) => {
            this.handleKeypress(e);
        });
    }

    componentWillUnmount() {
        document.removeEventListener("keydown", (e) => {
            this.handleKeypress(e);
        });
    }

    render() {
        const {personsOnScreen, onSaveChanges} = this.props;
        return (
            <>
                {
                    personsOnScreen.map((person, index) => (
                        <div
                            key={index}
                            draggable={"true"}
                            onDragStart={() => this.dragStartHandler(person)}
                            onDragOver={(e) => this.dragOverHandler(e)}
                            onDrop={(e) => this.dropHandler(e, person)}
                            onClick={() => this.handleMouseClick(person)}
                        >
                            <ParameterList
                                key={person.id}
                                id={person.id}
                                fullName={person.personInfo.fullName}
                                age={person.personInfo.age}
                                birthYear={person.personInfo.birthYear}
                                weight={person.personInfo.weight}
                                belts={person.personInfo.belts}
                                onSaveChanges={onSaveChanges}
                                listStyle={person === this.state.currentActivePerson ?
                                    this.state.activeStyle : DEFAULT_INACTIVE_STYLE}
                                handleParameterIsEdited={this.handleParameterIsEdited}
                            />
                        </div>
                    ))
                }
            </>
        );
    }
}

DraggableList.propTypes = {
    personsOnScreen: PropType.array,
    onSaveChanges: PropType.func,
    changePersonsOnScreen: PropType.func
}

export default DraggableList;