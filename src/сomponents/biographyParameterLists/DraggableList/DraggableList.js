import DraggableListView from "./DraggableListView";
import React from "react";
import PropType from "prop-types";
import "./styles.css";

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
                e.preventDefault();
                this.setState((state) => {
                    return {
                        currentActivePerson:
                            this.props.personsOnScreen[this.getPersonIndex(state.currentActivePerson) - 1]
                    }
                });
                break;

            case("ArrowDown"):
                e.preventDefault();
                this.setState((state) => {
                    return {
                        currentActivePerson:
                            this.props.personsOnScreen[this.getPersonIndex(state.currentActivePerson) + 1]
                    }
                });
                break;

            default:
                this.setState({activeStyle: DEFAULT_ACTIVE_STYLE});
                break;
        }
    }

    getPersonIndex(person) {
        return this.props.personsOnScreen.indexOf(person);
    }

    componentDidMount() {
        document.addEventListener("keydown", this.handleKeypress);
    }

    componentWillUnmount() {
        document.removeEventListener("keydown", this.handleKeypress);
    }

    render() {
        const {personsOnScreen, onSaveChanges} = this.props;
        return (
            <DraggableListView
                personsOnScreen={personsOnScreen}
                onSaveChanges={onSaveChanges}
                inactiveStyle={DEFAULT_INACTIVE_STYLE}
                activeStyle={this.state.activeStyle}
                dragStartHandler={this.dragStartHandler}
                dragOverHandler={this.dragOverHandler}
                dropHandler={this.dropHandler}
                handleMouseClick={this.handleMouseClick}
                currentActivePerson={this.state.currentActivePerson}
                handleParameterIsEdited={this.handleParameterIsEdited}
            />
        );
    }
}

DraggableList.propTypes = {
    personsOnScreen: PropType.array,
    onSaveChanges: PropType.func,
    changePersonsOnScreen: PropType.func
}

export default DraggableList;