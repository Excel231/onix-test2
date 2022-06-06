import React from "react";
import PropType from "prop-types";
import DraggableListView from "./DraggableListView";

const DEFAULT_INACTIVE_STYLE = "Biography-ul";

const DEFAULT_ACTIVE_STYLE = "selected-Biography-ul";

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
                handleParameterIsEdited={this.state.handleParameterIsEdited}
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